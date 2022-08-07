import { Col, Row } from "react-bootstrap"
import HBStatisticCard from "../../../components/statistic-card"

const HBPackageStatistics = () => {
    return <div className="hb-network-statistics">
        <Row className="row pb-lg-1 mb-3 mb-lg-4">
            <Col xl={6} lg={8} className="mb-lg-0 mb-3">
                <HBStatisticCard label="Your investment package" multiple value="0 DOT" subValue="Package 0" value2="Lock 0 HIM" subValue2="Plan 0" className="highlight" />
            </Col>
            <Col xl={3} lg={4} md={6}>
                <HBStatisticCard label="Profit" value="0%" subValue="Day" className="h-100" />
            </Col>
        </Row>
    </div>
}
export default HBPackageStatistics