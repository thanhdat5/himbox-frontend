import { Tab, Table, Tabs } from "react-bootstrap";

const HBDashboardTransactions = () => {
    const TRANSACTIONS = [
        { id: 1, address: '0xdAD71b01A3...B76Aa9DCCC', value: '25.00 DOT', date: new Date() },
        { id: 2, address: '0xdAD71b01A3...B76Aa9DCCC', value: '25.00 DOT', date: new Date() },
        { id: 3, address: '0xdAD71b01A3...B76Aa9DCCC', value: '25.00 DOT', date: new Date() },
        { id: 4, address: '0xdAD71b01A3...B76Aa9DCCC', value: '25.00 DOT', date: new Date() },
        { id: 5, address: '0xdAD71b01A3...B76Aa9DCCC', value: '25.00 DOT', date: new Date() }
    ]
    return <div className="hb-dashboard-transaction">
        <div className="hb-dashboard-transaction-heading">TRANSACTION</div>
        <Tabs
            defaultActiveKey="Deposit"
            id="TransactionTabs"
            className="hb-dashboard-tabs"
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
            <Tab eventKey="Upgrade" title="Upgrade">
                <div className="no-data">No transaction</div>
            </Tab>
            <Tab eventKey="Withdrawal" title="Withdrawal">
                <div className="no-data">No transaction</div>
            </Tab>
            <Tab eventKey="Downgrade" title="Downgrade">
                <div className="no-data">No transaction</div>
            </Tab>
            <Tab eventKey="Profit" title="Profit">
                <div className="no-data">No transaction</div>
            </Tab>
        </Tabs>
    </div>
}
export default HBDashboardTransactions