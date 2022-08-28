import { ReactElement } from "react";
import { Link } from "react-router-dom";

interface HBSidebarItemProps {
    link: string;
    text: string;
    icon: ReactElement;
    active?: boolean;
    className?: string;
}
const HBSidebarItem = ({ link, text, icon, active, className = '' }: HBSidebarItemProps) => {
    return <li className={`hb-sidebar-menu-item ${className}`}>
        <Link to={link} className={`hb-sidebar-menu-link ${active ? 'active' : ''}`}>
            <span className="hb-sidebar-menu-icon">
                {icon}
            </span>
            <span className="hb-sidebar-menu-text">{text}</span>
        </Link>
    </li>
}
export default HBSidebarItem