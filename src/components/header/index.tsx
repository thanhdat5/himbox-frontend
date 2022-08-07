import { useCallback, useEffect, useState } from "react";
import { Breadcrumb, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants";
import HBNotification from "../notification";

interface HBHeaderProps {
    onDeposit: () => void;
    onWithdraw: () => void;
    onSidebarToggle: () => void;
}

const HBHeader = ({ onDeposit, onWithdraw, onSidebarToggle }: HBHeaderProps) => {
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

    return <header className={`hb-header ${sticky ? 'sticky' : ''}`}>
        <div className="hb-header-inner">
            <div className="hb-header-heading">
                <Link to={ROUTES.DASHBOARD} className="hb-logo">
                    <Image src="/images/logo.png" alt="HimBOX" />
                    <span>HimBOX</span>
                </Link>
                <Breadcrumb aria-label="breadcrumb">
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: ROUTES.DASHBOARD }}>Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Dashboard</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className="hb-header-menu">
                <Button type="button" className="hb-header-btn hb-btn-deposit" onClick={onDeposit}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 16 16">
                        <path fill="currentColor" fillRule="evenodd"
                            d="M14,9 C14.5523,9 15,9.44772 15,10 L15,13 C15,14.1046 14.1046,15 13,15 L3,15 C1.89543,15 1,14.1046 1,13 L1,10 C1,9.44772 1.44772,9 2,9 C2.55228,9 3,9.44771 3,10 L3,13 L13,13 L13,10 C13,9.44771 13.4477,9 14,9 Z M8,1 C8.55228,1 9,1.44772 9,2 L9,6.58579 L10.2929,5.29289 C10.6834,4.90237 11.3166,4.90237 11.7071,5.29289 C12.0976,5.68342 12.0976,6.31658 11.7071,6.70711 L8,10.4142 L4.29289,6.70711 C3.90237,6.31658 3.90237,5.68342 4.29289,5.29289 C4.68342,4.90237 5.31658,4.90237 5.70711,5.29289 L7,6.58579 L7,2 C7,1.44772 7.44772,1 8,1 Z" />
                    </svg>
                    <span>Deposit</span>
                </Button>
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
                <Link to={ROUTES.PROFILE} className="hb-user-logged">
                    <div className="hb-user-avatar me-0">
                        <Image src="/images/avatar.png" alt="" />
                    </div>
                </Link>
                <Button type="button" variant="link" className="hb-btn-toggle-sidebar" onClick={onSidebarToggle}>
                    <Image src="/images/btn-hamburger.svg" alt="" />
                </Button>
            </div>
        </div>
    </header>
}
export default HBHeader