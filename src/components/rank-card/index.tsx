interface HBRankCardProps {
    rank: number;
    commission?: string;
    condition?: any;
    active?: boolean;
}
const HBRankCard = ({ rank, commission, condition, active }: HBRankCardProps) => {
    return <li className={`hb-rank-item ${active ? 'active' : ''}`}>
        <span className="hb-rank-point hb-rank-point-warning hb-rank-point-indicator"></span>
        <div className="hb-rank-content">
            <div className="d-flex justify-content-between align-items-center mb-2">
                <h6 className="mb-0">{rank}</h6>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                    viewBox="0 0 24 24" fill="none" stroke={active ? '#e6007a' : 'b1afcd'} strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
            </div>
            <div className="hb-rank-description">
                <span>Commission:</span>
                <span>{`${commission}% reward daily of total team`}</span>
            </div>
            <div className="hb-rank-description">
                <span>Condition:</span>
                {rank != 1 ?
                    <span>{`Volume reaches ${condition.dot} DOT in Team. Have at least ${condition?.f1} F1 qualified Rank ${condition?.rank}`}</span>
                    :
                    <span>{`Volume reaches ${condition.dot} DOT in Team`}</span>
                }
            </div>
        </div>
    </li>
}
export default HBRankCard