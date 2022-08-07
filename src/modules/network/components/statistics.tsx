import { Col, Row } from "react-bootstrap"
import HBStatisticCard from "../../../components/statistic-card"

const HBNetworkStatistics = () => {
    return <div className="hb-network-statistics">
        <Row className="pb-lg-1 mb-3 mb-lg-4">
            <Col xl={2} lg={3} md={6} xs={6} className="mb-xl-0 mb-md-4 mb-3">
                <HBStatisticCard label="Total Sales" value="250" subValue="DOT" />
            </Col>
            <Col xl={2} lg={3} md={6} xs={6} className="mb-xl-0 mb-md-4 mb-3">
                <HBStatisticCard label="Total Members" value="20" />
            </Col>
            <Col xl={2} lg={3} md={6} xs={6} className="mb-xl-0 mb-md-4 mb-3">
                <HBStatisticCard label="Total Investors" value="4" subValue="Partners" />
            </Col>
            <Col xl={2} lg={3} md={6} xs={6} className="mb-xl-0 mb-md-4 mb-3">
                <HBStatisticCard label="Ranking" value="0" />
            </Col>
            <Col xl={2} lg={3} md={6} xs={6} className="mb-xl-0 mb-md-4 mb-3">
                <HBStatisticCard label="Click" value="5" />
            </Col>
            <Col xl={2} lg={3} md={6} xs={6} className="mb-xl-0 mb-md-4 mb-3">
                <HBStatisticCard label="Registration" value="2" />
            </Col>
        </Row>
    </div>
}
export default HBNetworkStatistics