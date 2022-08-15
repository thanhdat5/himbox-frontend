import { get } from "lodash";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import HBLevelCard from "../../../components/level-card"
import { DashboardLevelsResponseModel } from "../../../models";
import { getDashboardLevelsRequest } from "../../../redux/actions/dashboardActions";
import { getCurrentUserId } from "../../../services/appService";

let LEVELS = [
    { id: 1, level: 'Level 1', members: 1, value: "" },
    { id: 2, level: 'Level 2', members: 1, value: "" },
    { id: 3, level: 'Level 3', members: 0, value: "" },
    { id: 4, level: 'Level 4', members: 0, value: "" },
    { id: 5, level: 'Level 5', members: 1, value: "" },
    { id: 6, level: 'Level 6', members: 1, value: "" },
    { id: 7, level: 'Level 7', members: 0, value: "" },
    { id: 8, level: 'Level 8', members: 0, value: "" },
    { id: 9, level: 'Level 9', members: 0, value: "" },
    { id: 10, level: 'Level 10', members: 0, value: "" },
    { id: 11, level: 'Level 11', members: 0, value: "" },
    { id: 12, level: 'Level 12', members: 0, value: "" },
    { id: 13, level: 'Level 13', members: 0, value: "" },
    { id: 14, level: 'Level 14', members: 0, value: "" },
    { id: 15, level: 'Level 15', members: 0, value: "" },
    { id: 16, level: 'Level 16', members: 0, value: "" },
    { id: 17, level: 'Level 17', members: 0, value: "" },
    { id: 18, level: 'Level 18', members: 0, value: "" },
    { id: 19, level: 'Level 19', members: 0, value: "" },
    { id: 20, level: 'Level 20', members: 0, value: "" },
]

const HBDashboardLevels = () => {

    const levelTree: any = useSelector(state => get(state, 'dashboard.statistics[0]', null));


    const dispatch = useDispatch();
    const [levels, setLevels] = useState<any>([]);
    // Todo
    useEffect(() => {
        // const userId = getCurrentUserId();
        // dispatch(getDashboardLevelsRequest({ userId }))
        if (levelTree) {
            const temp = LEVELS.map((item, index) => {
                return { ...item, members: get(levelTree, `members.fn[${index}]`, '-'), value: get(levelTree, `sales.salers[${index}]`, '-'), };
            })
            setLevels(temp);
        }
    }, [levelTree])

    return <div className="hb-dashboard-levels">
        {
            levels.map((item: any, idx: number) => {
                return <HBLevelCard key={idx} level={item.level} members={item.members} value={item.value}
                className={item.value ? 'active' : ''} 
                />
            })
        }
    </div>
}
export default HBDashboardLevels