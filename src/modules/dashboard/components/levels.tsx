import HBLevelCard from "../../../components/level-card"

const HBDashboardLevels = () => {
    const LEVELS = [
        { id: 1, level: 'Level 1', members: 1, value: "50.00" },
        { id: 2, level: 'Level 2', members: 1, value: "100.00" },
        { id: 3, level: 'Level 3', members: 0, value: "" },
        { id: 4, level: 'Level 4', members: 0, value: "" },
        { id: 5, level: 'Level 5', members: 1, value: "50.00" },
        { id: 6, level: 'Level 6', members: 1, value: "50.00" },
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
        { id: 21, level: 'Level 21', members: 0, value: "" },
        { id: 22, level: 'Level 22', members: 0, value: "" },
        { id: 23, level: 'Level 23', members: 0, value: "" },
        { id: 24, level: 'Level 24', members: 0, value: "" },
        { id: 25, level: 'Level 25', members: 0, value: "" },
    ]

    return <div className="hb-dashboard-levels">
        {
            LEVELS.map((item: any, idx: number) => {
                return <HBLevelCard key={idx} level={item.level} members={item.members} value={item.value} className={item.value ? 'active' : ''} />
            })
        }
    </div>
}
export default HBDashboardLevels