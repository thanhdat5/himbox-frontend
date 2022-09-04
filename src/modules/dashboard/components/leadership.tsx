import { get } from "lodash";
import { useSelector } from "react-redux";
import HBRankCard from "../../../components/rank-card";
import { RAKING_MODEL } from "../../../constants";

const HBDashboardLeadership = () => {
    const statistics = useSelector(state => get(state, 'dashboard.statistics[0]', null));

    return <div className="hb-leadership">
        <div className="hb-leadership-heading">Leadership</div>
        <div className="hb-leadership-inner">
            <ul className="hb-rank ms-50 mb-0">
                {
                    RAKING_MODEL.map((value: any, index: number) => {
                        return <HBRankCard key={index} rank={value.rank} commission={value.commission} condition={value.conditions} active={get(statistics, 'rank', 0) >= value.rank} />
                    })
                }
            </ul>
        </div>
    </div>
}
export default HBDashboardLeadership