interface HBCardProps {
    children: any;
    className?: string;
}
const HBCard = ({ children, className }: HBCardProps) => {
    return <div className={`hb-card ${className || ''}`}>
        {children}
    </div>
}
export default HBCard; 