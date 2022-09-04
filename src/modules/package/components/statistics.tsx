import { get } from "lodash";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import LockDotModal from "../../../components/lock-dot-modal";
import HBStatisticCard from "../../../components/statistic-card";
import { PACKAGE_RANKING_TYPES } from "../../../constants";
import { formatNumberDownRound } from "../../../utils/helpers";

const HBPackageStatistics = () => {
    const myPackage = useSelector(state => get(state, 'dashboard.statistics[0].package', null));
    // const dashboardStatistics = useSelector(state => get(state, 'dashboard.statistics[0]', null));
    const [lockVisible, setLockVisible] = useState(false);
    // const requestLockDOTMore = (e: any) => {
    //     e.preventDefault();
    //     setLockVisible(true);
    // }

    return <div className="hb-network-statistics">
        <Row className="row pb-lg-1 mb-3 mb-lg-4">
            <Col xl={6} lg={8} className="mb-lg-0 mb-3">
                <HBStatisticCard label="Your investment package"
                    multiple
                    value={`${formatNumberDownRound(get(myPackage, 'dot_amount', 0))} DOT`}
                    subValue={`Level ${PACKAGE_RANKING_TYPES[get(myPackage, 'profit_type', 5)]}`}
                    value2={`Lock ${formatNumberDownRound(get(myPackage, 'him_amount', 0))} HIM`}
                    subValue2={`Plan ${get(myPackage, 'plan', 0)}`}
                    className="highlight"
                />
            </Col>
            <Col xl={3} lg={4} md={6}>
                <HBStatisticCard label="Profit" value={`${get(myPackage, 'profit', 0)}%`} subValue="Day" className="h-100" />
            </Col>
            {/* <Col xl={3} lg={4} md={6}>
                <HBStatisticCard label="Locked DOT" value={`${formatNumberDownRound(get(dashboardStatistics, 'balances.dot_locked', 0))} DOT`} subValue="Day" className="h-100"
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
        </Row>
        <LockDotModal
            visible={lockVisible}
            onHide={() => setLockVisible(false)}
        />
    </div>
}
export default HBPackageStatistics