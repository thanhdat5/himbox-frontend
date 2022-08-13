import { useEffect, useState } from "react";
import { Button, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Countdown from 'react-countdown';
import { Link, useNavigate } from "react-router-dom";
import VerifyCodeControl from "../../../components/verify-code-control";
import { ROUTES } from "../../../constants";
import { recoverPasswordRequest } from "../../../redux/actions/forgotPasswordActions";
import { getForgotPasswordLoadingSelector, getForgotPasswordSuccessSelector } from "../../../redux/selectors/forgotPasswordSelectors";
import { getVerifyUserInfo } from "../../../redux/selectors/signUpSelectors";
import { history } from "../../../utils/history";
import { verifyAccountRequest } from "../../../redux/actions/verifyAccountActions";
import { get } from "lodash";

const VerifyAccount = () => {
    const dispatch = useDispatch();
    const loading = useSelector(getForgotPasswordLoadingSelector);
    const success = useSelector(getForgotPasswordSuccessSelector);
    const userInfo = useSelector(getVerifyUserInfo);

    const navigate = useNavigate();
    const [verifyCode, setVerifyCode] = useState<string>('');
    const [showCountdown, setShowCountdown] = useState<boolean>(false);
    const [timeCd, setTimeCd] = useState<any>(0);

    useEffect(() => {
        if (!userInfo) {
            history.push(ROUTES.LOGIN);
        }
    }, []);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const postData = { username: get(userInfo, 'username', ''), user_id: get(userInfo, 'userId', ''), numberVerify: verifyCode };
        dispatch(verifyAccountRequest(postData));
    }

    // useEffect(() => {
    //     if (success) {
    //         navigate(ROUTES.LOGIN);
    //     }
    // }, [success]);

    const rendererCountdown = ({ seconds, completed }: any) => {
        if (completed) {
            return <span></span>;
        } else {
            return <span>({seconds})</span>;
        }
    }

    return <>
        <div className="hb-auth-form-title">Forgot Password</div>
        <Form onSubmit={handleSubmit}>
            <FormGroup className="mb-4">
                <FormLabel>Enter verification code</FormLabel>
                <VerifyCodeControl
                    value={verifyCode}
                    onChange={(e: any) => setVerifyCode(e.target.value)}
                    required
                    showCountdown={showCountdown && timeCd}
                />
            </FormGroup>

            <Button type="submit" className="w-100" disabled={loading}>
                <span>Verify</span>
            </Button>
        </Form>
        <div className="hb-auth-form-note">
            Back to <Link className="hb-auth-form-link" to={ROUTES.SIGN_UP}>Register</Link>
        </div>
    </>
}
export default VerifyAccount