import { get } from "lodash";
import { useEffect, useState } from "react";
import { Badge, Button, OverlayTrigger, Table, Tooltip } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Pagination } from 'antd';
import { useNavigate } from "react-router-dom";
import { default as ConfirmCancelModal, default as ConfirmModal } from "../../components/confirm-modal";
import WithdrawModal from "../../components/withdraw-modal";
import { NUMBER_PER_PAGE, ROUTES } from "../../constants";
import { WithdrawalTransactionsResponseModel } from "../../models";
import { cancelWithdrawRequest, getListWithdrawRequest, resetWithdrawState } from "../../redux/actions/withdrawActions";
import { is2FAActive } from "../../services/appService";
import { formatNumberDownRound } from "../../utils/helpers";
import { formatWalletAddress, getStatus } from "../../utils/utils";
import { NETWORK_SCAN } from "../../_config";

interface WithdrawTxProps {
    isDashboard?: boolean
}

const WithdrawalTransactions = ({ isDashboard = false }: WithdrawTxProps) => {
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [current, setCurrent] = useState(1);

    const withdrawalTransactions = useSelector(state => get(state, 'withdraw.withdrawalTransactions', []));
    const cancelSuccess = useSelector(state => get(state, 'withdraw.cancelSuccess', false));
    const loadingList = useSelector(state => get(state, 'withdraw.loadingList', false));

    const [showWarningModal, setShowWarningModal] = useState(false);
    const [showConfirmWithdrawModal, setShowConfirmWithdrawModal] = useState(false);
    const [showConfirmCancelModal, setShowConfirmCancelModal] = useState(false);
    const [withdrawId, setWithdrawId] = useState<string | undefined>('');

    useEffect(() => {
        dispatch(getListWithdrawRequest());
    }, [])

    // Warning 2fa
    const handleWarningDismiss = (isConfirmed: boolean) => {
        if (isConfirmed) {
            navigate(ROUTES.PROFILE);
        }
        setShowWarningModal(false);
    }

    // Cancel withdraw
    const handleCancelWithdraw = (item: WithdrawalTransactionsResponseModel) => {
        setWithdrawId(item._id);
        setShowConfirmCancelModal(true);
    }

    const handleConfirmDismiss = (isConfirmed: boolean) => {
        if (isConfirmed) {
            dispatch(cancelWithdrawRequest({ withdraw_id: withdrawId || '' }));
        } else {
            setShowConfirmCancelModal(false);
        }
    }

    useEffect(() => {
        if (cancelSuccess) {
            setWithdrawId('');
            setShowConfirmCancelModal(false);
            dispatch(resetWithdrawState());
        }
    }, [cancelSuccess])

    // Confirm withdraw
    const handleConfirmWithdraw = (item: WithdrawalTransactionsResponseModel) => {
        if (!is2FAActive()) {
            setShowWarningModal(true);
        } else {
            setWithdrawId(item._id);
            setShowConfirmWithdrawModal(true);
        }
    }

    const handleWithdrawDismiss = (isSubmit?: boolean) => {
        if (isSubmit) {
            dispatch(getListWithdrawRequest());
        }
        setWithdrawId('');
        setShowConfirmWithdrawModal(false);
    }

    const handleNavigate = (txID: string, type = 'tx') => {
        window.open(`${NETWORK_SCAN}/${type}/${txID}`);
    }

    return <>
        {
            loadingList ? <div className="no-data">Loading...</div> : <>
                {
                    !withdrawalTransactions || withdrawalTransactions.length <= 0 ? <div className="no-data">No transaction</div> :
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>TxHash</th>
                                    <th>Time</th>
                                    <th>To Address</th>
                                    <th>Amount (DOT)</th>
                                    <th>Fee</th>
                                    <th>Status</th>
                                    <th style={{ width: 202 }}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    withdrawalTransactions.slice(0, 10).map((item: any, idx: number) => {
                                        return <tr key={idx}>
                                            <td>{(current - 1) * NUMBER_PER_PAGE + idx + 1}</td>
                                            <td>
                                                {/* <OverlayTrigger placement="top" overlay={(props) => <Tooltip id="button-tooltip" {...props}>{item?.transaction?.tx_hash}</Tooltip>}> */}
                                                <span style={{ cursor: 'pointer' }} onClick={() => handleNavigate(item?.transaction?.tx_hash, 'tx')}>{formatWalletAddress(get(item, 'transaction.tx_hash', ''), 20)}</span>
                                                {/* </OverlayTrigger> */}
                                            </td>
                                            <td className="text-nowrap">{new Date(item.createdAt).toLocaleDateString()} {new Date(item.createdAt).toLocaleTimeString()}</td>
                                            <td>
                                                {/* <OverlayTrigger placement="top" overlay={(props) => <Tooltip id="button-tooltip" {...props}>{item.to}</Tooltip>}> */}
                                                <span style={{ cursor: 'pointer' }} onClick={() => handleNavigate(item?.to, 'address')}>{formatWalletAddress(item.to, 20)}</span>
                                                {/* </OverlayTrigger> */}
                                            </td>
                                            <td className="text-nowrap">{item.amount.dot} DOT</td>
                                            <td>{formatNumberDownRound(item.fee)}</td>
                                            <td>
                                                <Badge bg={
                                                    item.status === 'W' ? 'primary' :
                                                        item.status === 'P' ? 'warning' :
                                                            item.status === 'PC' ? 'info' :
                                                                item.status === 'C' ? 'success' :
                                                                    item.status === 'F' ? 'danger' :
                                                                        item.status === 'CL' ? 'secondary' : ''
                                                }>{getStatus(item.status)}</Badge>
                                            </td>
                                            <td className="text-nowrap">
                                                {
                                                    (item.status === 'W') ?
                                                        <>
                                                            <Button className="btn-listing" onClick={() => handleConfirmWithdraw(item)} type="button" size="sm">
                                                                <span>Confirm</span>
                                                            </Button>
                                                            <Button className="btn-listing btn-secondary ms-2" onClick={() => handleCancelWithdraw(item)} type="button" size="sm">
                                                                <span>Cancel</span>
                                                            </Button>
                                                        </> : <></>
                                                }
                                            </td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </Table>
                }
                {!isDashboard && <Pagination
                    current={current}
                    total={withdrawalTransactions.length}
                    pageSize={NUMBER_PER_PAGE}
                    showSizeChanger={false}
                    onChange={(page: any, pageSize: any) => setCurrent(page)}
                />}
            </>
        }
        {showWarningModal ? <ConfirmModal message="Must be enable Tfa to withdraw." onDismiss={handleWarningDismiss} /> : <></>}
        {showConfirmWithdrawModal ? <WithdrawModal onHide={handleWithdrawDismiss} currentStep={2} withdraw_id={withdrawId} /> : <></>}
        {showConfirmCancelModal ? <ConfirmCancelModal message="Are you sure you want to cancel this withdrawal request?" onDismiss={handleConfirmDismiss} /> : <></>}
    </>
}
export default WithdrawalTransactions