import { get } from 'lodash';
import React, { useState, useEffect } from 'react';
import { Col, Row } from "react-bootstrap";
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import HBCard from "../../components/card";
import HBPageWrap from "../../components/page-wrap";
import { PACKAGE_RANKING_TYPES } from '../../constants';
import { getDashboardStatisticsRequest } from '../../redux/actions/dashboardActions';
import { GET_DASHBOARD_STATISTICS_REQUEST } from '../../redux/types/dashboard';
import HBDashboardBlock from "./components/block";
import HBDashboardLeadership from "./components/leadership";
import HBDashboardLevels from "./components/levels";
import HBDashboardStatistics from "./components/statistics";
import HBDashboardTransactions from "./components/transactions";

const Dashboard = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDashboardStatisticsRequest({}))
    }, [])

    const statistics = useSelector(state => get(state, 'dashboard.statistics[0]', null));

    return <HBPageWrap className="hb-dashboard">
        <HBDashboardStatistics />
        <Row>
            <Col xl={9} className="pe-xl-5 mb-4 mb-xl-0">
                <HBCard>
                    <Row>
                        <Col lg={3} className="mb-lg-0 mb-md-4 mb-3">
                            <Row>
                                <Col lg={12} md={6}>
                                    <HBDashboardBlock label="Package Value" value={`${get(statistics, 'package.dot_amount', 0)} DOT`} />
                                </Col>
                                <Col lg={12} md={6}>
                                    <HBDashboardBlock label="HIM (Locked)" value={`${get(statistics, 'package.him_amount', 0)} HIM`} />
                                </Col>

                                <Col lg={12} md={6}>
                                    <HBDashboardBlock label="Daily Reward" value={`${get(statistics, 'package.profit', 0)} %`} />
                                </Col>

                                <Col lg={12} md={6}>
                                    <HBDashboardBlock label="Level" value={PACKAGE_RANKING_TYPES[get(statistics, 'package.profit_type', 5)]} className="mb-0" />
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={9}>
                            <HBDashboardLevels />
                        </Col>
                    </Row>
                    {/* <HBDashboardTransactions /> */}
                </HBCard>
            </Col>
            <Col cl={3} className="ps-xl-0">
                <HBDashboardLeadership />
            </Col>
        </Row>
    </HBPageWrap>
}
export default Dashboard