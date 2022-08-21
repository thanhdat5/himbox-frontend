import { get } from "lodash";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Pagination } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { NUMBER_PER_PAGE, PACKAGE_ACTION_TYPES, PACKAGE_NAME_TYPES } from "../../constants";
import { GET_LIST_STAKE_REQUEST } from "../../redux/types/withdraw";
import { formatNumberDownRound } from "../../utils/helpers";
import { formatWalletAddress, getStatus } from "../../utils/utils";
import { NETWORK_SCAN } from "../../_config";

interface DepositTransactionsProps {
    isDashboard?: boolean
}

const DepositTransactions = ({ isDashboard = false }: DepositTransactionsProps) => {

    const dispatch = useDispatch();

    const depositHistory = useSelector(state => get(state, 'dashboard.depositTransactions', []));

    const [current, setCurrent] = useState(1);

    useEffect(() => {
        dispatch({ type: GET_LIST_STAKE_REQUEST });
    }, [])

    const handleNavigate = (txID: string, type = 'tx') => {
        window.open(`${NETWORK_SCAN}/${type}/${txID}`);
    }

    return <>
        {
            !depositHistory || depositHistory.length <= 0 ?
                <div className="no-data">No transaction</div>
                :
                <Table responsive>
                    <thead>
                        <tr>
                            <th style={{ width: 50 }}>No.</th>
                            <th>From</th>
                            <th>Amount (DOT)</th>
                            <th>TxHash</th>
                            <th style={{ width: 180 }}>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            depositHistory.map((item: any, idx: number) => {
                                return <tr key={idx + item?._id}>
                                    <td>{idx + 1}</td>
                                    <td>
                                        <span style={{ cursor: 'pointer' }} onClick={() => handleNavigate(item?.from, 'address')}>{formatWalletAddress(item?.from, 20)}</span>
                                    </td>
                                    <td>{typeof (get(item, 'amount.dot', undefined)) !== 'undefined' ? formatNumberDownRound(get(item, 'amount.dot', 0)) : formatNumberDownRound(get(item, 'amount', 0))}</td>
                                    <td>
                                        <span style={{ cursor: 'pointer' }} onClick={() => handleNavigate(get(item, 'transaction.tx_hash', ''))}>{formatWalletAddress(get(item, 'transaction.tx_hash', ''), 26)}</span>
                                    </td>
                                    <td>{new Date(item?.time).toLocaleDateString()} {new Date(item?.time).toLocaleTimeString()}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </Table>
        }
        {!isDashboard && <Pagination
            current={current}
            total={depositHistory.length}
            pageSize={NUMBER_PER_PAGE}
            showSizeChanger={false}
            onChange={(page: any, pageSize: any) => setCurrent(page)}
        />}
    </>
}
export default DepositTransactions