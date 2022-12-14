import { useWeb3React } from "@web3-react/core"
import { useEffect } from "react"
import { Button, Image } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import { ENDPOINTS, HIMBOX_ACCESS_TOKEN, HIMBOX_REFRESH_TOKEN, HIMBOX_USER_ID, HIMBOX_USER_INFO, ROUTES } from "../../constants"
import useAuth from "../../hook/useAuth"
import { apiCall } from "../../redux/saga/api"
import { LOG_OUT } from "../../redux/types/user"
import { useDotBalance } from "../../state/wallet/hook"
import { getBalanceNumber } from "../../utils/formatBal"
import { formatCurrency, formatNumberDownRound } from "../../utils/helpers"
import HBUserCard from "../user-card"
import HBSidebarFooter from "./footer"
import HBSidebarItem from "./item"

interface HBSidebarProps {
    onSidebarToggle: () => void;
    show: boolean;
}
const HBSidebar = ({ show, onSidebarToggle }: HBSidebarProps) => {
    const dispatch = useDispatch();
    const { account } = useWeb3React();
    const { logout } = useAuth();
    const dotBal = useDotBalance();
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = async (e: any) => {
        e.preventDefault();

        try {
            const accessToken = await localStorage.getItem(HIMBOX_ACCESS_TOKEN);
            const res = await apiCall('POST', ENDPOINTS.LOGOUT, {
                token: accessToken
            });
            console.log('res', res);
            localStorage.removeItem(HIMBOX_ACCESS_TOKEN);
            localStorage.removeItem(HIMBOX_REFRESH_TOKEN);
            localStorage.removeItem(HIMBOX_USER_ID);
            localStorage.removeItem(HIMBOX_USER_INFO);
            navigate(ROUTES.LOGIN);
        } catch (error) {
            localStorage.removeItem(HIMBOX_ACCESS_TOKEN);
            localStorage.removeItem(HIMBOX_REFRESH_TOKEN);
            localStorage.removeItem(HIMBOX_USER_ID);
            localStorage.removeItem(HIMBOX_USER_INFO);
            navigate(ROUTES.LOGIN);
        }
        dispatch({ type: LOG_OUT });
    }

    useEffect(() => {
        onSidebarToggle();
    }, [location])

    return <div className={`hb-sidebar ${show ? 'show' : ''}`}>
        <div className="hb-sidebar-inner">
            <div className="hb-sidebar-menu-wrap">
                <div className="pt-3 pb-4 text-end d-block d-md-none">
                    <Button variant="link" type="button" className="hb-btn-toggle-sidebar" onClick={onSidebarToggle}>
                        <Image src="/images/btn-close.svg" alt="Close" />
                    </Button>
                </div>
                <div className="d-block d-md-none mx-4">
                    <HBUserCard />
                </div>
                <ul className="hb-sidebar-menu">
                    {account ?
                        <div className="hb-sidebar-balance d-md-none d-block">
                            <Button type="button" className="hb-header-btn btn-default w-100 py-3" onClick={logout}>
                                <span className="text-white" style={{ fontSize: '30px' }}>
                                    <b>{formatNumberDownRound(getBalanceNumber(dotBal, 10))} DOT</b>
                                </span>
                                <div>Disconnect</div>
                            </Button>
                        </div> : <></>
                    }
                    <HBSidebarItem link={ROUTES.DASHBOARD} text="Dashboard" active={location?.pathname === '/' || location?.pathname === ROUTES.DASHBOARD} icon={<svg width="15px" height="15px" viewBox="0 0 15 15" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                            d="M2.8 1L2.74967 0.99997C2.52122 0.999752 2.32429 0.999564 2.14983 1.04145C1.60136 1.17312 1.17312 1.60136 1.04145 2.14983C0.999564 2.32429 0.999752 2.52122 0.99997 2.74967L1 2.8V5.2L0.99997 5.25033C0.999752 5.47878 0.999564 5.67572 1.04145 5.85017C1.17312 6.39864 1.60136 6.82688 2.14983 6.95856C2.32429 7.00044 2.52122 7.00025 2.74967 7.00003L2.8 7H5.2L5.25033 7.00003C5.47878 7.00025 5.67572 7.00044 5.85017 6.95856C6.39864 6.82688 6.82688 6.39864 6.95856 5.85017C7.00044 5.67572 7.00025 5.47878 7.00003 5.25033L7 5.2V2.8L7.00003 2.74967C7.00025 2.52122 7.00044 2.32429 6.95856 2.14983C6.82688 1.60136 6.39864 1.17312 5.85017 1.04145C5.67572 0.999564 5.47878 0.999752 5.25033 0.99997L5.2 1H2.8ZM2.38328 2.01382C2.42632 2.00348 2.49222 2 2.8 2H5.2C5.50779 2 5.57369 2.00348 5.61672 2.01382C5.79955 2.05771 5.94229 2.20045 5.98619 2.38328C5.99652 2.42632 6 2.49222 6 2.8V5.2C6 5.50779 5.99652 5.57369 5.98619 5.61672C5.94229 5.79955 5.79955 5.94229 5.61672 5.98619C5.57369 5.99652 5.50779 6 5.2 6H2.8C2.49222 6 2.42632 5.99652 2.38328 5.98619C2.20045 5.94229 2.05771 5.79955 2.01382 5.61672C2.00348 5.57369 2 5.50779 2 5.2V2.8C2 2.49222 2.00348 2.42632 2.01382 2.38328C2.05771 2.20045 2.20045 2.05771 2.38328 2.01382ZM9.8 1L9.74967 0.99997C9.52122 0.999752 9.32429 0.999564 9.14983 1.04145C8.60136 1.17312 8.17312 1.60136 8.04145 2.14983C7.99956 2.32429 7.99975 2.52122 7.99997 2.74967L8 2.8V5.2L7.99997 5.25033C7.99975 5.47878 7.99956 5.67572 8.04145 5.85017C8.17312 6.39864 8.60136 6.82688 9.14983 6.95856C9.32429 7.00044 9.52122 7.00025 9.74967 7.00003L9.8 7H12.2L12.2503 7.00003C12.4788 7.00025 12.6757 7.00044 12.8502 6.95856C13.3986 6.82688 13.8269 6.39864 13.9586 5.85017C14.0004 5.67572 14.0003 5.47878 14 5.25033L14 5.2V2.8L14 2.74967C14.0003 2.52122 14.0004 2.32429 13.9586 2.14983C13.8269 1.60136 13.3986 1.17312 12.8502 1.04145C12.6757 0.999564 12.4788 0.999752 12.2503 0.99997L12.2 1H9.8ZM9.38328 2.01382C9.42632 2.00348 9.49222 2 9.8 2H12.2C12.5078 2 12.5737 2.00348 12.6167 2.01382C12.7995 2.05771 12.9423 2.20045 12.9862 2.38328C12.9965 2.42632 13 2.49222 13 2.8V5.2C13 5.50779 12.9965 5.57369 12.9862 5.61672C12.9423 5.79955 12.7995 5.94229 12.6167 5.98619C12.5737 5.99652 12.5078 6 12.2 6H9.8C9.49222 6 9.42632 5.99652 9.38328 5.98619C9.20045 5.94229 9.05771 5.79955 9.01382 5.61672C9.00348 5.57369 9 5.50779 9 5.2V2.8C9 2.49222 9.00348 2.42632 9.01382 2.38328C9.05771 2.20045 9.20045 2.05771 9.38328 2.01382ZM2.74967 7.99997L2.8 8H5.2L5.25033 7.99997C5.47878 7.99975 5.67572 7.99956 5.85017 8.04145C6.39864 8.17312 6.82688 8.60136 6.95856 9.14983C7.00044 9.32429 7.00025 9.52122 7.00003 9.74967L7 9.8V12.2L7.00003 12.2503C7.00025 12.4788 7.00044 12.6757 6.95856 12.8502C6.82688 13.3986 6.39864 13.8269 5.85017 13.9586C5.67572 14.0004 5.47878 14.0003 5.25033 14L5.2 14H2.8L2.74967 14C2.52122 14.0003 2.32429 14.0004 2.14983 13.9586C1.60136 13.8269 1.17312 13.3986 1.04145 12.8502C0.999564 12.6757 0.999752 12.4788 0.99997 12.2503L1 12.2V9.8L0.99997 9.74967C0.999752 9.52122 0.999564 9.32429 1.04145 9.14983C1.17312 8.60136 1.60136 8.17312 2.14983 8.04145C2.32429 7.99956 2.52122 7.99975 2.74967 7.99997ZM2.8 9C2.49222 9 2.42632 9.00348 2.38328 9.01382C2.20045 9.05771 2.05771 9.20045 2.01382 9.38328C2.00348 9.42632 2 9.49222 2 9.8V12.2C2 12.5078 2.00348 12.5737 2.01382 12.6167C2.05771 12.7995 2.20045 12.9423 2.38328 12.9862C2.42632 12.9965 2.49222 13 2.8 13H5.2C5.50779 13 5.57369 12.9965 5.61672 12.9862C5.79955 12.9423 5.94229 12.7995 5.98619 12.6167C5.99652 12.5737 6 12.5078 6 12.2V9.8C6 9.49222 5.99652 9.42632 5.98619 9.38328C5.94229 9.20045 5.79955 9.05771 5.61672 9.01382C5.57369 9.00348 5.50779 9 5.2 9H2.8ZM9.8 8L9.74967 7.99997C9.52122 7.99975 9.32429 7.99956 9.14983 8.04145C8.60136 8.17312 8.17312 8.60136 8.04145 9.14983C7.99956 9.32429 7.99975 9.52122 7.99997 9.74967L8 9.8V12.2L7.99997 12.2503C7.99975 12.4788 7.99956 12.6757 8.04145 12.8502C8.17312 13.3986 8.60136 13.8269 9.14983 13.9586C9.32429 14.0004 9.52122 14.0003 9.74967 14L9.8 14H12.2L12.2503 14C12.4788 14.0003 12.6757 14.0004 12.8502 13.9586C13.3986 13.8269 13.8269 13.3986 13.9586 12.8502C14.0004 12.6757 14.0003 12.4788 14 12.2503L14 12.2V9.8L14 9.74967C14.0003 9.52122 14.0004 9.32429 13.9586 9.14983C13.8269 8.60136 13.3986 8.17312 12.8502 8.04145C12.6757 7.99956 12.4788 7.99975 12.2503 7.99997L12.2 8H9.8ZM9.38328 9.01382C9.42632 9.00348 9.49222 9 9.8 9H12.2C12.5078 9 12.5737 9.00348 12.6167 9.01382C12.7995 9.05771 12.9423 9.20045 12.9862 9.38328C12.9965 9.42632 13 9.49222 13 9.8V12.2C13 12.5078 12.9965 12.5737 12.9862 12.6167C12.9423 12.7995 12.7995 12.9423 12.6167 12.9862C12.5737 12.9965 12.5078 13 12.2 13H9.8C9.49222 13 9.42632 12.9965 9.38328 12.9862C9.20045 12.9423 9.05771 12.7995 9.01382 12.6167C9.00348 12.5737 9 12.5078 9 12.2V9.8C9 9.49222 9.00348 9.42632 9.01382 9.38328C9.05771 9.20045 9.20045 9.05771 9.38328 9.01382Z"
                            fill="currentColor" />
                    </svg>} />

                    <HBSidebarItem link={ROUTES.NETWORK} text="Network" active={location?.pathname === ROUTES.NETWORK} icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round">
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    </svg>} />

                    <HBSidebarItem link={ROUTES.PACKAGE} text="Package" active={location?.pathname === ROUTES.PACKAGE} icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>} />

                    <HBSidebarItem link={ROUTES.TRANSACTIONS} text="Transactions" active={location?.pathname === ROUTES.TRANSACTIONS} icon={<svg xmlns="http://www.w3.org/2000/svg" width="64px" height="64px" viewBox="0 0 64 64" id="icons">
                        <path fill="currentColor" d="M52,7H12a6,6,0,0,0-6,6V51a6,6,0,0,0,6,6H52a6,6,0,0,0,6-6V13A6,6,0,0,0,52,7Zm2,44a2,2,0,0,1-2,2H12a2,2,0,0,1-2-2V13a2,2,0,0,1,2-2H52a2,2,0,0,1,2,2Z" />
                        <path fill="currentColor" d="M45,29a2,2,0,0,0,0-4H22.83l2.58-2.59a2,2,0,0,0-2.82-2.82l-6,6a2,2,0,0,0-.44,2.18A2,2,0,0,0,18,29Z" />
                        <path fill="currentColor" d="M47,36H20a2,2,0,0,0,0,4H42.17l-2.58,2.59a2,2,0,1,0,2.82,2.82l6-6a2,2,0,0,0,.44-2.18A2,2,0,0,0,47,36Z" />
                    </svg>} />

                    <HBSidebarItem link={ROUTES.PROFILE} text="Profile" active={location?.pathname === ROUTES.PROFILE} icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                        strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>} />

                    <li className="hb-sidebar-menu-item">
                        <a href="#signout" onClick={handleLogout} className="hb-sidebar-menu-link">
                            <span className="hb-sidebar-menu-icon">
                                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13 12H22M22 12L18.6667 8M22 12L18.6667 16" stroke="currentColor"
                                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path
                                        d="M14 7V5.1736C14 4.00352 12.9999 3.08334 11.8339 3.18051L3.83391 3.84717C2.79732 3.93356 2 4.80009 2 5.84027V18.1597C2 19.1999 2.79733 20.0664 3.83391 20.1528L11.8339 20.8195C12.9999 20.9167 14 19.9965 14 18.8264V17"
                                        stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round" />
                                </svg>
                            </span>
                            <span className="hb-sidebar-menu-text">Sign Out</span>
                        </a>
                    </li>
                </ul>
            </div>

            <HBSidebarFooter />
        </div>
    </div>
}
export default HBSidebar