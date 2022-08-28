import { Col, Row } from "react-bootstrap";
import HBStatisticCard from "../../../components/statistic-card";

const HBPoolStatistics2 = () => {
    return <div className="hb-pool-statistics">
        <Row className="mb-3 mb-lg-4">
            <Col md={3} xs={6} className="mb-3 mb-lg-4">
                <HBStatisticCard label="Price" value='0.1' subValue="USDT" className="h-100 highlight" />
            </Col>
            <Col md={3} xs={6} className="mb-3 mb-lg-4">
                <HBStatisticCard label="Claimed" value='10' subValue="HIM" className="h-100" />
            </Col>
            <Col md={3} xs={6} className="mb-3 mb-lg-4">
                <HBStatisticCard label="Claimable" value='20' subValue="HIM" className="h-100" />
            </Col>
            <Col md={3} xs={6} className="mb-3 mb-lg-4">
                <HBStatisticCard label="USDT Purchased" value='0.1' subValue="USDT" className="h-100" />
            </Col>
        </Row>
    </div>
}
export default HBPoolStatistics2