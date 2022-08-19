import { get } from "lodash";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import HBStatisticCard from "../../../components/statistic-card";
import { PACKAGE_RANKING_TYPES } from "../../../constants";
import { formatNumberDownRound } from "../../../utils/helpers";

const HBPackageStatistics = () => {

    const myPackage = useSelector(state => get(state, 'dashboard.statistics[0].package', null));

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
        </Row>
    </div>
}
export default HBPackageStatistics