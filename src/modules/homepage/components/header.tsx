import { useCallback, useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom"
import { HIMBOX_ACCESS_TOKEN, ROUTES } from "../../../constants"

const PublicHeader = () => {
    const logged = localStorage.getItem(HIMBOX_ACCESS_TOKEN);
    const [sticky, setSticky] = useState(false);

    const handleStickyHeader = () => {
        setSticky(window.scrollY > 50);
    }

    const onScroll = useCallback(() => {
        handleStickyHeader();
    }, [])

    useEffect(() => {
        handleStickyHeader();
        window.addEventListener('scroll', onScroll)
        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    }, [onScroll])

    return <header className={`hbl-header ${sticky ? 'sticky' : ''}`}>
        <Container>
            <div className="hbl-header-inner">
                <Link to="/" className="hbl-header-logo">
                    <img src="/images/logo-f.png" alt="HimBOX" />
                </Link>
                <div className="hbl-header-actions">
                    <Button variant="link" type="button" className="hbl-toggle-header">
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="2.12134" y="0.0147247" width="21" height="3" rx="1.5"
                                transform="rotate(45 2.12134 0.0147247)" fill="white"></rect>
                            <rect y="14.8492" width="21" height="3" rx="1.5" transform="rotate(-45 0 14.8492)"
                                fill="white"></rect>
                        </svg>
                    </Button>
                    <div className="hbl-header-menu">
                        <Link className="hbl-header-menu-item" to="/">Home</Link>
                        <Link className="hbl-header-menu-item" to="/">Documents</Link>
                    </div>
                    <div className="hbl-header-buttons">
                        {
                            logged ? <Link to={ROUTES.DASHBOARD} className="btn btn-primary">Dashboard</Link> : <>
                                <Link to={ROUTES.SIGN_UP} className="btn btn-primary btn-default">Sign Up</Link>
                                <Link to={ROUTES.LOGIN} className="btn btn-primary">Login</Link>
                            </>
                        }
                    </div>
                </div>
                <Button variant="link" type="button" className="hbl-toggle-header">
                    <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="21" height="3" rx="1.5" fill="white"></rect>
                        <rect y="6" width="21" height="3" rx="1.5" fill="white"></rect>
                        <rect y="12" width="21" height="3" rx="1.5" fill="white"></rect>
                    </svg>
                </Button>
            </div>
        </Container>
    </header>
}
export default PublicHeader