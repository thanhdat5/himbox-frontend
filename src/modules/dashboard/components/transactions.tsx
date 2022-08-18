import { get } from "lodash";
import { useEffect, useState } from "react";
import { Tab, Table, Tabs } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import WithdrawalTransactions from "../../../components/transactions/withdrawal";
import { DepositTransactionsResponseModel, WithdrawalTransactionsResponseModel } from "../../../models";
import { getDepositTransactionsRequest, getWithdrawalTransactionsRequest } from "../../../redux/actions/dashboardActions";
import { formatWalletAddress } from "../../../utils/utils";
import { NETWORK_SCAN } from "../../../_config";

const HBDashboardTransactions = () => {

    const dispatch = useDispatch();

    const depositHistory = useSelector(state => get(state, 'dashboard.depositTransactions', []));

    const [depositTransactions, setDepositTransactions] = useState<DepositTransactionsResponseModel[]>([]);
    const [withdrawalTransactions, setWithdrawalTransactions] = useState<WithdrawalTransactionsResponseModel[]>([]);

    useEffect(() => {
        getDepositTransactions();
        getWithdrawalTransactions();
    }, []);

    const getDepositTransactions = () => {
        dispatch(getDepositTransactionsRequest())
    }
    const getWithdrawalTransactions = () => {
        dispatch(getWithdrawalTransactionsRequest())
    }

    const handleTabChange = (e: any) => {
        switch (e) {
            case 'Deposit': {
                getDepositTransactions();
                break;
            }
            case 'Withdrawal': {
                getWithdrawalTransactions();
                break;
            }
        }
    }

    const handleNavigate = (txID: string, type = 'tx') => {
        window.open(`${NETWORK_SCAN}/${type}/${txID}`);
    }

    return <div className="hb-dashboard-transaction">
        <div className="hb-dashboard-transaction-heading">TRANSACTION</div>
        <Tabs
            defaultActiveKey="Deposit"
            id="TransactionTabs"
            className="hb-tabs"
            onSelect={handleTabChange}
        >
            <Tab eventKey="Deposit" title="Deposit">
                <Table responsive>
                    <thead>
                        <tr>
                            <th style={{ width: 50 }}>No.</th>
                            <th>From</th>
                            <th>Value</th>
                            <th>Tx ID</th>
                            <th style={{ width: 180 }}>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            depositHistory.slice(0, 10).map((item: any, idx: number) => {
                                return <tr key={idx + item?._id}>
                                    <td>{idx + 1}</td>
                                    <td><span style={{ cursor: 'pointer' }} onClick={() => handleNavigate(item?.from, 'address')}>{formatWalletAddress(item?.from, 20)}</span></td>
                                    <td>{typeof (get(item, 'amount.dot', undefined)) !== 'undefined' ? get(item, 'amount.dot', 0) : get(item, 'amount', 0)}</td>
                                    <td><span style={{ cursor: 'pointer' }} onClick={() => handleNavigate(get(item, 'transaction.tx_hash', ''))}>{formatWalletAddress(get(item, 'transaction.tx_hash', ''), 26)}</span></td>
                                    <td>{new Date(item?.time).toLocaleDateString()} {new Date(item?.time).toLocaleTimeString()}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </Table>
            </Tab>
            <Tab eventKey="Withdrawal" title="Withdrawal">
                <WithdrawalTransactions />
            </Tab>
        </Tabs>
    </div>
}
export default HBDashboardTransactions