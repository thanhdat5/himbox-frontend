import { useEffect } from "react"
import { Col, Image, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import HBPageWrap from "../../components/page-wrap"
import { getUserInfoRequest, resetUserState } from "../../redux/actions/userActions"
import { getUserInfoSelector } from "../../redux/selectors/userSelectors"
import { getCurrentUser } from "../../services/appService"
import HBProfileChangePassword from "./components/change-password"
import HBProfileContact from "./components/contact"
import HBProfileInfo from "./components/info"
import HBProfileVerify from "./components/verify"

const Profile = () => {
    const dispatch = useDispatch();
    const userInfo = useSelector(getUserInfoSelector);
    const userLogged = getCurrentUser();

    useEffect(() => {
        dispatch(getUserInfoRequest());

        return () => {
            dispatch(resetUserState());
        }
    }, []);

    return <HBPageWrap className="hb-profile" title="Profile Settings">
        <Row className="justify-content-md-end">
            <Col xl={4} lg={6} md={6} className="mb-md-0">
                <HBProfileInfo userLogged={userLogged} />
            </Col>
            <Col xl={4} lg={6} md={6} className="mb-md-0">
                <HBProfileContact userInfo={userInfo} />
            </Col>
            <Col xl={4} lg={6} md={6}>
                <HBProfileVerify userLogged={userLogged} />
                <HBProfileChangePassword />
            </Col>
        </Row>
    </HBPageWrap>
}
export default Profile