import { get } from "lodash";
import { useEffect, useState } from "react";
import { Tab, Tabs, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import HBPageWrap from "../../components/page-wrap";
import WithdrawalTransactions from "../../components/transactions/withdrawal";
import { getDepositTransactionsRequest } from "../../redux/actions/dashboardActions";
import { getListWithdrawRequest } from "../../redux/actions/withdrawActions";
import { formatWalletAddress } from "../../utils/utils";
import { NETWORK_SCAN } from "../../_config";

const Transactions = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        getDepositTransactions();
    }, []);

    const depositHistory = useSelector(state => get(state, 'dashboard.depositTransactions', []));

    const getDepositTransactions = () => {
        dispatch(getDepositTransactionsRequest())
    }

    const getWithdrawalTransactions = () => {
        dispatch(getListWithdrawRequest());
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

    return <HBPageWrap className="hb-package" title="Transactions">
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
                            depositHistory.map((item: any, idx: number) => {
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
    </HBPageWrap>
}
export default Transactions