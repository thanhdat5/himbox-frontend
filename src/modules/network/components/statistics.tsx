import { get } from "lodash";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import HBStatisticCard from "../../../components/statistic-card"
import { NetworkStatisticsResponseModel } from "../../../models";
import { getNetworkStatisticsRequest } from "../../../redux/actions/networkActions";
import { getCurrentUserId } from "../../../services/appService";

const HBNetworkStatistics = () => {

    const dispatch = useDispatch();

    const statistics = useSelector(state => get(state, 'dashboard.statistics[0]', null));

    return <div className="hb-network-statistics">
        <Row className="pb-lg-1 mb-3 mb-lg-4">
            <Col xl={2} lg={3} md={6} xs={6} className="mb-xl-0 mb-md-4 mb-3">
                <HBStatisticCard label="Total Sales" value={get(statistics, 'sales.total', 0)} subValue="DOT" />
            </Col>
            <Col xl={2} lg={3} md={6} xs={6} className="mb-xl-0 mb-md-4 mb-3">
                <HBStatisticCard label="Total Members" value={get(statistics, 'members.total', 0)} />
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