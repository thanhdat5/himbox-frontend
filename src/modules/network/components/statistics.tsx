import { get } from "lodash";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import HBStatisticCard from "../../../components/statistic-card";
import { formatNumberDownRound } from "../../../utils/helpers";

const HBNetworkStatistics = () => {
    const statistics = useSelector(state => get(state, 'dashboard.statistics[0]', null));

    return <div className="hb-network-statistics">
        <Row className="pb-lg-1 mb-3 mb-lg-4">
            <Col xl={2} lg={3} md={6} xs={6} className="mb-xl-0 mb-md-4 mb-3">
                <HBStatisticCard label="Total Sales" value={formatNumberDownRound(get(statistics, 'sales.total', 0))} subValue="DOT" />
            </Col>
            <Col xl={2} lg={3} md={6} xs={6} className="mb-xl-0 mb-md-4 mb-3">
                <HBStatisticCard label="Total Members" value={formatNumberDownRound(get(statistics, 'members.total', 0))} />
            </Col>
            <Col xl={2} lg={3} md={6} xs={6} className="mb-xl-0 mb-md-4 mb-3">
                <HBStatisticCard label="Ranking" value={get(statistics, 'rank', 'NO RANKING')} />
            </Col>
            <Col xl={2} lg={3} md={6} xs={6} className="mb-xl-0 mb-md-4 mb-3">
                <HBStatisticCard label="Registration (F1)" value={get(statistics, 'total_f1', 0)} />
            </Col>
        </Row>
    </div>
}
export default HBNetworkStatistics