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
                    <div className="hbl-header-buttons">
                        {
                            logged ? <Link to={ROUTES.DASHBOARD} className="btn btn-primary">Dashboard</Link> : <>
                                <Link to={ROUTES.SIGN_UP} className="btn btn-primary btn-default d-none d-md-inline-flex">Sign Up</Link>
                                <Link to={ROUTES.LOGIN} className="btn btn-primary">Login</Link>
                            </>
                        }
                    </div>
                </div>
            </div>
        </Container>
    </header>
}
export default PublicHeader