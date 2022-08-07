interface HBSectionTitleProps {
    title: string;
    className?: string;
}
const HBSectionTitle = ({ title, className }: HBSectionTitleProps) => {
    return <div className={`hb-section-title ${className || ''}`}>{title}</div>
}
export default HBSectionTitle;