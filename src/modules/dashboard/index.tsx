import { Col, Row } from "react-bootstrap";
import HBCard from "../../components/card";
import HBPageWrap from "../../components/page-wrap";
import HBDashboardBlock from "./components/block";
import HBDashboardLeadership from "./components/leadership";
import HBDashboardLevels from "./components/levels";
import HBDashboardStatistics from "./components/statistics";
import HBDashboardTransactions from "./components/transactions";

const Dashboard = () => {
    return <HBPageWrap className="hb-dashboard">
        <HBDashboardStatistics />
        <Row>
            <Col xl={9} className="pe-xl-5 mb-4 mb-xl-0">
                <HBCard>
                    <Row>
                        <Col lg={3} className="mb-lg-0 mb-md-4 mb-3">
                            <Row>
                                <Col lg={12} md={6}>
                                    <HBDashboardBlock label="Package Value" value="0 DOT" />
                                </Col>
                                <Col lg={12} md={6}>
                                    <HBDashboardBlock label="HIM (Locked)" value="0 HIM" />
                                </Col>

                                <Col lg={12} md={6}>
                                    <HBDashboardBlock label="Daily Reward" value="0%" />
                                </Col>

                                <Col lg={12} md={6}>
                                    <HBDashboardBlock label="Level" value="1" className="mb-0" />
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={9}>
                            <HBDashboardLevels />
                        </Col>
                    </Row>
                    <HBDashboardTransactions />
                </HBCard>
            </Col>
            <Col cl={3} className="ps-xl-0">
                <HBDashboardLeadership />
            </Col>
        </Row>
    </HBPageWrap>
}
export default Dashboard