interface HBPageTitleProps {
    title: string;
    className?: string;
}
const HBPageTitle = ({ title, className = 'mb-3' }: HBPageTitleProps) => {
    return <h1 className={`hp-page-title ${className}`}>{title}</h1>
}
export default HBPageTitle;