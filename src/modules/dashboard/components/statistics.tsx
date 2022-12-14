import { get } from "lodash";
import { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import HBStatisticCard from "../../../components/statistic-card";
import WithdrawModal from "../../../components/withdraw-modal";
import { formatNumberDownRound } from "../../../utils/helpers";

const HBDashboardStatistics = () => {

    const dispatch = useDispatch();

    const dashboardStatistics = useSelector(state => get(state, 'dashboard.statistics[0]', null));

    const [showWithdraw, setShowWithdraw] = useState(false);

    const handleCloseWithdraw = (isSubmit?: boolean) => {
        if (isSubmit) {
            console.log('Withdrawal success!');
        }
        setShowWithdraw(false);
    }

    return <div className="hb-dashboard-statistics">
        <Row className="row pb-lg-1 mb-4">
            <Col lg={4} md={6} className="mb-lg-0 mb-md-4 mb-3">
                <HBStatisticCard label="Balance" value={formatNumberDownRound(get(dashboardStatistics, 'balances.dot', 0), 3)} subValue="DOT" className="highlight" action={<Button variant="link" className="btn-setting" onClick={() => setShowWithdraw(true)}>
                    {/* <span data-bs-toggle="tooltip" data-bs-placement="top" title="Withdraw">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                            strokeLinejoin="round">
                            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                            <polyline points="17 8 12 3 7 8" />
                            <line x1="12" y1="3" x2="12" y2="15" />
                        </svg>
                    </span> */}
                </Button>} />
            </Col>
            <Col lg={4} md={6} className="mb-lg-0 mb-md-4 mb-3">
                <HBStatisticCard label="Total Profit" value={formatNumberDownRound(get(dashboardStatistics, 'total_profit', 0), 3)} subValue="DOT" />
            </Col>
            <Col lg={4} md={6} className="mb-lg-0 mb-md-4 mb-3">
                <HBStatisticCard label="Total Sales" value={formatNumberDownRound(get(dashboardStatistics, 'sales.total', 0), 3)} subValue="DOT" />
            </Col>
            {/* <Col lg={3} md={6}>
                <HBStatisticCard label="Validator" value={get(dashboardStatistics, )} subValue="DOT" />
            </Col> */}
        </Row>
        {showWithdraw ? <WithdrawModal onHide={handleCloseWithdraw} /> : <></>}
    </div>
}
export default HBDashboardStatistics