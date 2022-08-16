import { useEffect, useState } from "react";
import { Button, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import VerifyCodeControl from "../../../components/verify-code-control";
import { ENDPOINTS, MESSAGES, ROUTES } from "../../../constants";
import { recoverPasswordRequest } from "../../../redux/actions/forgotPasswordActions";
import { getForgotPasswordLoadingSelector, getForgotPasswordSuccessSelector } from "../../../redux/selectors/forgotPasswordSelectors";
import { getVerifyUserInfo } from "../../../redux/selectors/signUpSelectors";
import { history } from "../../../utils/history";
import { verifyAccountRequest } from "../../../redux/actions/verifyAccountActions";
import { get } from "lodash";
import { ShowErrorMessage, ShowSuccessMessage } from "../../../services/appService";
import { apiCall } from "../../../redux/saga/api";
import { extractError } from "../../../utils/helpers";

const VerifyAccount = (props: any) => {

    const dispatch = useDispatch();

    const loading = useSelector(getForgotPasswordLoadingSelector);
    const userInfo = useSelector(getVerifyUserInfo);

    const navigate = useNavigate();
    const [verifyCode, setVerifyCode] = useState<string>('');
    const [errors, setErrors] = useState<any>(null);
    const [showResend, setShowResend] = useState<boolean>(false);

    useEffect(() => {
        if (!userInfo) {
            history.push(ROUTES.LOGIN);
        }
    }, []);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setErrors(null);
        if (verifyCode.length !== 6) {
            setErrors({ code: MESSAGES.OTP_LENGTH_ERROR });
            return;
        }
        try {
            const res = await apiCall('POST', ENDPOINTS.VERIFY_ACCOUNT, {
                username: get(userInfo, 'username', ''), user_id: get(userInfo, 'userId', ''), numberVerify: verifyCode
            });
            console.log('ressss', res);
            ShowSuccessMessage(MESSAGES.REGISTER_SUCCESS);
            navigate(ROUTES.LOGIN);
        } catch (error) {
            console.log('errrrpr', error);
            if (get(error, 'response.data.msg', '') === "The verification number is expired") {
                setShowResend(true);
            } else if (get(error, 'response.data.msg', '') === "User account has been verified") {
                navigate(ROUTES.LOGIN);
            }
            ShowErrorMessage({ msg: extractError(error) });
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
                    showResend={showResend}
                    handleReset={() => {
                        setVerifyCode('');
                        setErrors(null);
                    }}
                />
                {errors?.code && <Form.Text className="text-error">{errors?.code}</Form.Text>}
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