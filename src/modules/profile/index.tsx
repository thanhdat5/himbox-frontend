import { useEffect } from "react"
import { Col, Row } from "react-bootstrap"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import HBPageWrap from "../../components/page-wrap"
import { getUserInfoRequest, resetUserState } from "../../redux/actions/userActions"
import { getUserInfoSelector } from "../../redux/selectors/userSelectors"
import { getCurrentUser } from "../../services/appService"
import HBProfileChangePassword from "./components/change-password"
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
        <Row className="gx-xl-5">
            <Col xl={5} lg={6} md={6} className="mb-md-0">
                <HBProfileInfo userInfo={userInfo} userLogged={userLogged} />
            </Col>
            <Col xl={5} lg={6} md={6}>
                <HBProfileVerify userLogged={userLogged} />
                <HBProfileChangePassword />
            </Col>
        </Row>
    </HBPageWrap>
}
export default Profile