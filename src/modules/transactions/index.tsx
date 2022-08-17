import { get } from "lodash";
import { useEffect, useState } from "react";
import { Button, Tab, Table, Tabs } from "react-bootstrap"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import ConfirmModal from "../../components/confirm-modal";
import HBPageWrap from "../../components/page-wrap"
import { TRANSACTION_STATUS } from "../../constants";
import { WithdrawalTransactionsResponseModel } from "../../models";
import { cancelWithdrawRequest, getListWithdrawRequest, resetWithdrawState } from "../../redux/actions/withdrawActions";
import { formatDate } from "../../utils";
import { getStatus } from "../../utils/utils";

const Transactions = () => {
    const dispatch = useDispatch();
    const withdrawalTransactions = useSelector(state => get(state, 'withdraw.withdrawalTransactions', []));
    const cancelSuccess = useSelector(state => get(state, 'withdraw.cancelSuccess', false));
    const loadingList = useSelector(state => get(state, 'withdraw.loadingList', false));

    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState<WithdrawalTransactionsResponseModel | null>(null);


    useEffect(() => {
        dispatch(getListWithdrawRequest());
    }, [])

    const handleCancelWithdraw = (item: WithdrawalTransactionsResponseModel) => {
        setSelectedItem(item);
        setShowConfirmModal(true);
    }

    const handleConfirmDismiss = (isConfirmed: boolean) => {
        if (isConfirmed) {
            dispatch(cancelWithdrawRequest({ withdraw_id: selectedItem?._id || '' }));
        } else {
            setShowConfirmModal(false);
        }
    }

    useEffect(() => {
        if (cancelSuccess) {
            setSelectedItem(null);
            setShowConfirmModal(false);
            dispatch(resetWithdrawState());
        }
    }, [cancelSuccess])

    return <HBPageWrap className="hb-package" title="Transactions"><Tabs
        defaultActiveKey="Withdrawal"
        id="TransactionTabs"
        className="hb-tabs"
    >
        <Tab eventKey="Withdrawal" title="Withdrawal">
            {
                loadingList ? <div className="no-data">Loading...</div> : <>
                    {
                        !withdrawalTransactions || withdrawalTransactions.length <= 0 ? <div className="no-data">No transaction</div> :
                            <Table responsive>
                                <thead>
                                    <tr>
                                        <th>Time</th>
                                        <th>To Address</th>
                                        <th>Amount (DOT)</th>
                                        <th>Fee</th>
                                        <th>TxHash</th>
                                        <th>Status</th>
                                        <th className="text-end" style={{ width: 100 }}>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        withdrawalTransactions.map((item: any, idx: number) => {
                                            return <tr key={idx}>
                                                <td>{new Date(item.createdAt).toLocaleDateString()} {new Date(item.createdAt).toLocaleTimeString()}</td>
                                                <td>{item.to}</td>
                                                <td>{item.amount.dot} DOT</td>
                                                <td>{item.fee}</td>
                                                <td>{item.transaction}</td>
                                                <td>{getStatus(item.status)}</td>
                                                <td className="text-end">
                                                    {
                                                        (item.status === 'W') ?
                                                            <Button onClick={() => handleCancelWithdraw(item)} type="button" size="sm" style={{ height: 'auto', minWidth: 'auto', borderRadius: 13, padding: '6px 20px', fontSize: '15px' }}>
                                                                <span>Cancel</span>
                                                            </Button> : ''
                                                    }
                                                </td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </Table>
                    }
                </>
            }


        </Tab>
    </Tabs>
        {showConfirmModal ? <ConfirmModal message="Are you sure you want to cancel this withdrawal request?" onDismiss={handleConfirmDismiss} /> : <></>}
    </HBPageWrap>
}
export default Transactions