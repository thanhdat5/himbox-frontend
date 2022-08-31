interface HBSectionTitleProps {
    title: string;
    className?: string;
}
const HBSectionTitle = ({ title, className }: HBSectionTitleProps) => {
    return <div className={`hb-sect-title ${className || ''}`}>{title}</div>
}
export default HBSectionTitle;