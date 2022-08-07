import { ReactElement } from "react";
import { Link } from "react-router-dom";

interface HBSidebarItemProps {
    link: string;
    text: string;
    icon: ReactElement;
    active?: boolean;
}
const HBSidebarItem = ({ link, text, icon, active }: HBSidebarItemProps) => {
    return <li className="hb-sidebar-menu-item">
        <Link to={link} className={`hb-sidebar-menu-link ${active ? 'active' : ''}`}>
            <span className="hb-sidebar-menu-icon">
                {icon}
            </span>
            <span className="hb-sidebar-menu-text">{text}</span>
        </Link>
    </li>
}
export default HBSidebarItem