interface HBLevelCardProps {
    level: string;
    members?: number;
    value?: string;
    className?: string;
}
const HBLevelCard = ({ level, members = 0, value, className }: HBLevelCardProps) => {
    return <div className={`hb-dashboard-level ${className || ''}`}>
        <div className="hb-dashboard-level-header">
            <span>{level}</span>
            <b>{members}</b>
        </div>
        <div className="hb-dashboard-level-value">{value} <small>{value ? 'DOT' : ''}</small></div>
    </div>
}
export default HBLevelCard