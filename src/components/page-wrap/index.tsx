import HBPageTitle from "../page-title";

interface HBPageWrapProps {
    title?: string;
    titleClassName?: string;
    className?: string;
    children: any;
}
const HBPageWrap = ({ title, className, titleClassName, children }: HBPageWrapProps) => {
    return <div className={`hb-page-wrap ${className || ''}`}>
        {title ? <HBPageTitle className={titleClassName} title={title} /> : <></>}
        {children}
    </div>
}
export default HBPageWrap;