import { useWeb3React } from "@web3-react/core";
import { useCallback, useEffect, useState } from "react";
import { Breadcrumb, Button, Dropdown, Image } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ENDPOINTS, HIMBOX_ACCESS_TOKEN, HIMBOX_REFRESH_TOKEN, HIMBOX_USER_ID, HIMBOX_USER_INFO, ROUTES } from "../../constants";
import useAuth from "../../hook/useAuth";
import { useWalletModal } from "../../modals/WalletModal";
import { apiCall } from "../../redux/saga/api";
import { LOG_OUT } from "../../redux/types/user";
import { useDotBalance } from "../../state/wallet/hook";
import { getBalanceNumber } from "../../utils/formatBal";
import { formatNumberDownRound } from "../../utils/helpers";
import HBNotification from "../notification";

interface HBHeaderProps {
    onDeposit: () => void;
    onWithdraw: () => void;
    onSidebarToggle: () => void;
}

const HBHeader = ({ onDeposit, onWithdraw, onSidebarToggle }: HBHeaderProps) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { login, logout } = useAuth();
    const { onPresentConnectModal } = useWalletModal(login, logout);
    const dotBal = useDotBalance();
    const { account } = useWeb3React();
    const [sticky, setSticky] = useState(false);

    const handleStikyHeader = () => {
        setSticky(window.scrollY > 50);
    }

    const onScroll = useCallback(() => {
        handleStikyHeader();
    }, [])

    useEffect(() => {
        handleStikyHeader();
        window.addEventListener('scroll', onScroll)
        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    }, [onScroll])

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

    return <header className={`hb-header ${sticky ? 'sticky' : ''}`}>
        <div className="hb-header-inner">
            <div className="hb-header-heading">
                <Link to="/" className="hb-logo">
                    <Image className="d-none d-md-block" src="/images/logo.svg" alt="HimBOX" />
                    <Image className="d-block d-md-none" src="/images/logo-s.svg" alt="HimBOX" />
                </Link>
                <Breadcrumb aria-label="breadcrumb">
                    {/* <Breadcrumb.Item linkAs={Link} linkProps={{ to: ROUTES.DASHBOARD }}>Home</Breadcrumb.Item> */}
                    {/* <Breadcrumb.Item active>Dashboard</Breadcrumb.Item> */}
                </Breadcrumb>
            </div>
            <div className="hb-header-menu">
                {account ?
                    <>
                        <Button type="button" className="hb-header-btn btn-secondary me-3 text-nowrap d-md-inline-flex d-none" onClick={logout}>
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 76.304 76.304">
                                <path fill="currentColor" d="M72.325,33.234v-2.947c0-5.389-3.698-9.919-8.686-11.217l-0.009-4.859c0-4.742-3.859-8.601-8.603-8.601h-0.455L14.31,18.1   c-0.917,0.053-1.787,0.265-2.604,0.584h-0.105C5.205,18.684,0,23.889,0,30.287v28.804c0,6.397,5.204,11.603,11.601,11.603h49.123   c6.396,0,11.601-5.205,11.601-11.603V55.26c2.323-0.899,3.979-3.151,3.979-5.789v-10.45C76.303,36.385,74.648,34.133,72.325,33.234   z M70.303,49.47c0,0.118-0.093,0.211-0.211,0.211H53.851c-0.118,0-0.21-0.093-0.21-0.211V39.021c0-0.115,0.094-0.209,0.21-0.209   h16.241c0.116,0,0.211,0.094,0.211,0.209V49.47z M55.398,11.637c1.261,0.18,2.232,1.266,2.232,2.579l0.008,4.469H32.679   L55.398,11.637z M60.724,64.693H11.602c-3.093,0-5.601-2.509-5.601-5.603V30.287c0-3.095,2.508-5.603,5.601-5.603h49.122   c3.094,0,5.601,2.508,5.601,5.603v2.525H53.851c-3.424,0-6.21,2.785-6.21,6.209V49.47c0,3.425,2.786,6.211,6.21,6.211h12.474v3.41   C66.325,62.184,63.818,64.693,60.724,64.693z" />
                            </svg>
                            <span>{formatNumberDownRound(getBalanceNumber(dotBal, 18))} DOT&nbsp;&nbsp;-&nbsp;&nbsp;<span className="logout">Disconnect</span></span>
                        </Button>
                        <Button type="button" className="hb-header-btn hb-btn-deposit" onClick={onDeposit}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 16 16">
                                <path fill="currentColor" fillRule="evenodd"
                                    d="M14,9 C14.5523,9 15,9.44772 15,10 L15,13 C15,14.1046 14.1046,15 13,15 L3,15 C1.89543,15 1,14.1046 1,13 L1,10 C1,9.44772 1.44772,9 2,9 C2.55228,9 3,9.44771 3,10 L3,13 L13,13 L13,10 C13,9.44771 13.4477,9 14,9 Z M8,1 C8.55228,1 9,1.44772 9,2 L9,6.58579 L10.2929,5.29289 C10.6834,4.90237 11.3166,4.90237 11.7071,5.29289 C12.0976,5.68342 12.0976,6.31658 11.7071,6.70711 L8,10.4142 L4.29289,6.70711 C3.90237,6.31658 3.90237,5.68342 4.29289,5.29289 C4.68342,4.90237 5.31658,4.90237 5.70711,5.29289 L7,6.58579 L7,2 C7,1.44772 7.44772,1 8,1 Z" />
                            </svg>
                            <span>Deposit</span>
                        </Button>
                    </>
                    :
                    <Button type="button" className="hb-header-btn hb-btn-deposit me-3" onClick={onPresentConnectModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 76.304 76.304">
                            <path fill="currentColor" d="M72.325,33.234v-2.947c0-5.389-3.698-9.919-8.686-11.217l-0.009-4.859c0-4.742-3.859-8.601-8.603-8.601h-0.455L14.31,18.1   c-0.917,0.053-1.787,0.265-2.604,0.584h-0.105C5.205,18.684,0,23.889,0,30.287v28.804c0,6.397,5.204,11.603,11.601,11.603h49.123   c6.396,0,11.601-5.205,11.601-11.603V55.26c2.323-0.899,3.979-3.151,3.979-5.789v-10.45C76.303,36.385,74.648,34.133,72.325,33.234   z M70.303,49.47c0,0.118-0.093,0.211-0.211,0.211H53.851c-0.118,0-0.21-0.093-0.21-0.211V39.021c0-0.115,0.094-0.209,0.21-0.209   h16.241c0.116,0,0.211,0.094,0.211,0.209V49.47z M55.398,11.637c1.261,0.18,2.232,1.266,2.232,2.579l0.008,4.469H32.679   L55.398,11.637z M60.724,64.693H11.602c-3.093,0-5.601-2.509-5.601-5.603V30.287c0-3.095,2.508-5.603,5.601-5.603h49.122   c3.094,0,5.601,2.508,5.601,5.603v2.525H53.851c-3.424,0-6.21,2.785-6.21,6.209V49.47c0,3.425,2.786,6.211,6.21,6.211h12.474v3.41   C66.325,62.184,63.818,64.693,60.724,64.693z" />
                        </svg>
                        <span>Connect Wallet</span>
                    </Button>
                }
                <Button type="button" className="hb-header-btn hb-btn-withdraw" onClick={onWithdraw}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                        <polyline points="17 8 12 3 7 8" />
                        <line x1="12" y1="3" x2="12" y2="15" />
                    </svg>
                    <span>Withdraw</span>
                </Button>
                <HBNotification />
                <Dropdown className="hb-user-logged">
                    <Dropdown.Toggle variant="link" id="dropdown-basic">
                        <span className="hb-user-avatar">
                            <Image src="/images/avatar.png" alt="" />
                        </span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu align="end">
                        <Dropdown.Item as={Link} to={ROUTES.PROFILE}>
                            <span className="hb-topbar-menu-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                            </span>
                            <span className="hb-topbar-menu-text">Profile</span>
                        </Dropdown.Item>
                        <Dropdown.Item onClick={handleLogout}>
                            <span className="hb-topbar-menu-icon">
                                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 12H22M22 12L18.6667 8M22 12L18.6667 16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14 7V5.1736C14 4.00352 12.9999 3.08334 11.8339 3.18051L3.83391 3.84717C2.79732 3.93356 2 4.80009 2 5.84027V18.1597C2 19.1999 2.79733 20.0664 3.83391 20.1528L11.8339 20.8195C12.9999 20.9167 14 19.9965 14 18.8264V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            </span>
                            <span className="hb-topbar-menu-text">Sign Out</span>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Button type="button" variant="link" className="hb-btn-toggle-sidebar" onClick={onSidebarToggle}>
                    <Image src="/images/btn-hamburger.svg" alt="" />
                </Button>
            </div>
        </div>
    </header>
}
export default HBHeader