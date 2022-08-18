import { Tab, Tabs } from "react-bootstrap";
import HBPageWrap from "../../components/page-wrap";
import WithdrawalTransactions from "../../components/transactions/withdrawal";

const Transactions = () => {
    return <HBPageWrap className="hb-package" title="Transactions"><Tabs
        defaultActiveKey="Withdrawal"
        id="TransactionTabs"
        className="hb-tabs"
    >
        <Tab eventKey="Withdrawal" title="Withdrawal">
            <WithdrawalTransactions />
        </Tab>
    </Tabs>
       </HBPageWrap>
}
export default Transactions