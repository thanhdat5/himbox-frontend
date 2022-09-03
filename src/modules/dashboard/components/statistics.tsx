import { get } from "lodash";
import { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import LockDotModal from "../../../components/lock-dot-modal";
import HBStatisticCard from "../../../components/statistic-card";
import WithdrawModal from "../../../components/withdraw-modal";
import { formatNumberDownRound } from "../../../utils/helpers";

const HBDashboardStatistics = () => {

    const dispatch = useDispatch();

    const dashboardStatistics = useSelector(state => get(state, 'dashboard.statistics[0]', null));

    // console.log('dashboardStatistics', dashboardStatistics);

    const [showWithdraw, setShowWithdraw] = useState(false);
    const [lockVisible, setLockVisible] = useState(false);

    const handleCloseWithdraw = (isSubmit?: boolean) => {
        if (isSubmit) {
            console.log('Withdrawal success!');
        }
        setShowWithdraw(false);
    }

    const requestLockDOTMore = (e: any) => {
        e.preventDefault();
        setLockVisible(true);
    }

    return <div className="hb-dashboard-statistics">
        <Row className="row pb-lg-1 mb-4">
            <Col lg={3} md={6} className="mb-md-4 mb-3">
                <HBStatisticCard label="Balance" value={formatNumberDownRound(get(dashboardStatistics, 'balances.dot', 0), 3)} subValue="DOT" className="highlight"
                    action={<Button variant="link" className="btn-setting" onClick={() => setShowWithdraw(true)}>
                        <span data-bs-toggle="tooltip" data-bs-placement="top" title="Withdraw">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                strokeLinejoin="round">
                                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                                <polyline points="17 8 12 3 7 8" />
                                <line x1="12" y1="3" x2="12" y2="15" />
                            </svg>
                        </span>
                    </Button>}
                />
            </Col>
            <Col lg={3} md={6} className="mb-md-4 mb-3">
                <HBStatisticCard label="Total Sales" value={formatNumberDownRound(get(dashboardStatistics, 'sales.total', 0), 3)} subValue="DOT" />
            </Col>
            {/* <Col lg={4} md={6} className="mb-lg-4 mb-3">
                <HBStatisticCard label="Locked DOT" value={formatNumberDownRound(get(dashboardStatistics, 'balances.dot_locked', 0), 3)} subValue="DOT"
                    action={<Button variant="link" className="btn-setting" onClick={requestLockDOTMore}>
                        <span data-bs-toggle="tooltip" data-bs-placement="top" title="Lock DOT">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 16 16">
                                <path fill="currentColor" fillRule="evenodd"
                                    d="M14,9 C14.5523,9 15,9.44772 15,10 L15,13 C15,14.1046 14.1046,15 13,15 L3,15 C1.89543,15 1,14.1046 1,13 L1,10 C1,9.44772 1.44772,9 2,9 C2.55228,9 3,9.44771 3,10 L3,13 L13,13 L13,10 C13,9.44771 13.4477,9 14,9 Z M8,1 C8.55228,1 9,1.44772 9,2 L9,6.58579 L10.2929,5.29289 C10.6834,4.90237 11.3166,4.90237 11.7071,5.29289 C12.0976,5.68342 12.0976,6.31658 11.7071,6.70711 L8,10.4142 L4.29289,6.70711 C3.90237,6.31658 3.90237,5.68342 4.29289,5.29289 C4.68342,4.90237 5.31658,4.90237 5.70711,5.29289 L7,6.58579 L7,2 C7,1.44772 7.44772,1 8,1 Z" />
                            </svg>
                        </span>
                    </Button>}
                />
            </Col> */}
            <Col lg={3} md={6} className="mb-md-4 mb-3">
                <HBStatisticCard label="Received Profit" value={formatNumberDownRound(get(dashboardStatistics, 'balances.dot_received', 0), 3)} subValue="DOT" />
            </Col>
            <Col lg={3} md={6} className="mb-md-4 mb-3">
                <HBStatisticCard label="Max Profit" value={formatNumberDownRound(get(dashboardStatistics, 'max_reward_profit', 0), 3)} subValue="DOT" />
            </Col>
        </Row>
        {showWithdraw ? <WithdrawModal onHide={handleCloseWithdraw} /> : <></>}
        <LockDotModal
            visible={lockVisible}
            onHide={() => setLockVisible(false)}
        />
    </div>
}
export default HBDashboardStatistics