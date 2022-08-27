import { Image } from "react-bootstrap";

const HBUserCard = ({ userLogged }: any) => {
    return <div className="mb-md-4 mb-3">
        <div className="hb-user-card">
            <Image src="/images/cards/01-indi.png" alt="INDI" />
            <span>Lavender</span>
        </div>
    </div>
}
export default HBUserCard