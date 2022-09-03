import { get } from "lodash";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import HBStatisticCard from "../../../components/statistic-card";
import { formatNumberDownRound } from "../../../utils/helpers";
import { USDT_DECIMALS } from "../../../_config";

const HBPoolStatistics2 = () => {

    const himSaleInfo = useSelector(state => get(state, 'himPool.himSaleInfo', null));
    const himSaleUserInfo = useSelector(state => get(state, 'himPool.himSaleUserInfo', null));

    return <div className="hb-pool-statistics">
        <Row className="mb-3 mb-lg-4">
            <Col md={3} xs={6} className="mb-3 mb-lg-4">
                <HBStatisticCard label="Price" value={formatNumberDownRound(Number(get(himSaleInfo, '7', 0)) / 10 ** 2)} subValue="USDT" className="h-100 highlight" />
            </Col>
            <Col md={3} xs={6} className="mb-3 mb-lg-4">
                <HBStatisticCard label="Claimed" value={formatNumberDownRound(Number(get(himSaleUserInfo, '2', 0)) / 10 ** USDT_DECIMALS)} subValue="HIM" className="h-100" />
            </Col>
            <Col md={3} xs={6} className="mb-3 mb-lg-4">
                <HBStatisticCard label="Claimable" value={formatNumberDownRound(Number(get(himSaleUserInfo, '1', 0) - get(himSaleUserInfo, '2', 0)) / 10 ** USDT_DECIMALS)} subValue="HIM" className="h-100" />
            </Col>
            <Col md={3} xs={6} className="mb-3 mb-lg-4">
                <HBStatisticCard label="USDT Purchased" value={formatNumberDownRound(Number(get(himSaleUserInfo, '0', 0)) / 10 ** USDT_DECIMALS)} subValue="USDT" className="h-100" />
            </Col>
        </Row>
    </div>
}
export default HBPoolStatistics2