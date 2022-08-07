interface HBDashboardBlockProps {
    label: string;
    value: string;
    className?: string;
}
const HBDashboardBlock = ({ label, value, className }: HBDashboardBlockProps) => {
    return <div className={`hb-dashboard-block ${className || ''}`}>
        <div className="hb-dashboard-label">{label}</div>
        <div className="hb-dashboard-value">{value}</div>
    </div>
}
export default HBDashboardBlock