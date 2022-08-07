import HBRankCard from "../../../components/rank-card"

const HBDashboardLeadership = () => {
    const RANKS = [
        { id: 1, rank: 'Rank 1', commission: '5% reward daily of total team', condition: 'Volume 5.000 DOT in Team', active: true },
        { id: 2, rank: 'Rank 2', commission: '10% reward daily of total team', condition: 'Have 2 qualified rank 1 in 2 different line', active: true },
        { id: 3, rank: 'Rank 3', commission: '15% reward daily of total team', condition: 'Have 2 qualified rank 2 in 2 different line' },
        { id: 4, rank: 'Rank 4', commission: '20% reward daily of total team', condition: 'Have 2 qualified rank 3 in 2 different line' },
        { id: 5, rank: 'Rank 5', commission: '25% reward daily of total team', condition: 'Have 2 qualified rank 4 in 2 different line' },
        { id: 5, rank: 'Rank 6', commission: '30% reward daily of total team', condition: 'Have 2 qualified rank 5 in 2 different line' }
    ]

    return <div className="hb-leadership">
        <div className="hb-leadership-heading">Leadership</div>
        <div className="hb-leadership-inner">
            <ul className="hb-rank ms-50 mb-0">
                {
                    RANKS.map((item: any, idx: number) => {
                        return <HBRankCard key={idx} rank={item.rank} commission={item.commission} condition={item.condition} active={item.active} />
                    })
                }
            </ul>
        </div>
    </div>
}
export default HBDashboardLeadership