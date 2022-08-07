import { Col, Row } from "react-bootstrap"
import HBPageWrap from "../../components/page-wrap"
import HBProfileChangePassword from "./components/change-password"
import HBProfileInfo from "./components/info"
import HBProfileVerify from "./components/verify"

const Profile = () => {
    return <HBPageWrap className="hb-profile" title="Profile Settings">
        <Row className="gx-xl-5">
            <Col xl={5} lg={6} md={6} className="mb-md-0 mb-3">
                <HBProfileInfo />
                <HBProfileChangePassword />
            </Col>
            <Col xl={5} lg={6} md={6}>
                <HBProfileVerify />
            </Col>
        </Row>
    </HBPageWrap>
}
export default Profile