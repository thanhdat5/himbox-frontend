import { useCallback, useEffect, useState } from "react";
import { Button } from "react-bootstrap"

const PublicScrollToTop = () => {
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

    const handleToTop = ()=>{
        document.getElementById('Home')?.scrollIntoView();
    }

    return <Button onClick={handleToTop} type="button" variant="primary" className={`hb-to-top ${sticky ? 'show' : ''}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" viewBox="0 0 48 48" fill="none">
            <path d="M24.0083 14.1005V42" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 26L24 14L36 26" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 6H36" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    </Button>
}
export default PublicScrollToTop;