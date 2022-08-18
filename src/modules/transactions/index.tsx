import { useState } from "react";
import { Tab, Tabs, Table } from "react-bootstrap";
import { useDispatch } from "react-redux";
import HBPageWrap from "../../components/page-wrap";
import WithdrawalTransactions from "../../components/transactions/withdrawal";
import { DepositTransactionsResponseModel, DowngradeTransactionsResponseModel, ProfitTransactionsResponseModel, UpgradeTransactionsResponseModel, WithdrawalTransactionsResponseModel } from "../../models";
import { getDepositTransactionsRequest, getDowngradeTransactionsRequest, getProfitTransactionsRequest, getUpgradeTransactionsRequest, getWithdrawalTransactionsRequest } from "../../redux/actions/dashboardActions";

const Transactions = () => {

    const TRANSACTIONS = [
        { id: 1, address: '0xdAD71b01A3...B76Aa9DCCC', value: '25.00 DOT', date: new Date() },
        { id: 2, address: '0xdAD71b01A3...B76Aa9DCCC', value: '25.00 DOT', date: new Date() },
        { id: 3, address: '0xdAD71b01A3...B76Aa9DCCC', value: '25.00 DOT', date: new Date() },
        { id: 4, address: '0xdAD71b01A3...B76Aa9DCCC', value: '25.00 DOT', date: new Date() },
        { id: 5, address: '0xdAD71b01A3...B76Aa9DCCC', value: '25.00 DOT', date: new Date() }
    ]
    const dispatch = useDispatch();
    const [depositTransactions, setDepositTransactions] = useState<DepositTransactionsResponseModel[]>([]);
    const [upgradeTransactions, setUpgradeTransactions] = useState<UpgradeTransactionsResponseModel[]>([]);
    const [withdrawalTransactions, setWithdrawalTransactions] = useState<WithdrawalTransactionsResponseModel[]>([]);
    const [downgradeTransactions, setDowngradeTransactions] = useState<DowngradeTransactionsResponseModel[]>([]);
    const [profitTransactions, setProfitTransactions] = useState<ProfitTransactionsResponseModel[]>([]);
    // Todo
    const getDepositTransactions = () => {
        dispatch(getDepositTransactionsRequest())
    }
    const getUpgradeTransactions = () => {
        dispatch(getUpgradeTransactionsRequest())
    }
    const getWithdrawalTransactions = () => {
        dispatch(getWithdrawalTransactionsRequest())
    }
    const getDowngradeTransactions = () => {
        dispatch(getDowngradeTransactionsRequest())
    }
    const getProfitTransactions = () => {
        dispatch(getProfitTransactionsRequest())
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
                            <th>Address</th>
                            <th>Value</th>
                            <th style={{ width: 180 }}>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            TRANSACTIONS.map((item: any, idx: number) => {
                                return <tr key={idx}>
                                    <td>{idx + 1}</td>
                                    <td>{item.address}</td>
                                    <td>{item.value}</td>
                                    <td>{item.date.toLocaleString()}</td>
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