import { useEffect, useState } from "react";
import { Button, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
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
import { extractError, validatePwd } from "../../../utils/helpers";
import PasswordControl from "../../../components/password-control";

const NewPassword = (props: any) => {
    const dispatch = useDispatch();

    const loading = useSelector(getForgotPasswordLoadingSelector);
    const userInfo = useSelector(getVerifyUserInfo);

    const navigate = useNavigate();

    const [verifyCode, setVerifyCode] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPwd, setConfirmPwd] = useState<string>('');

    const [errors, setErrors] = useState<any>(null);

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
        if (!validatePwd(password)) {
            setErrors({ password: MESSAGES['PASSWORD_FORMAT_INVALID'] });
            return;
        }
        if (password !== confirmPwd) {
            setErrors({ confirmPwd: MESSAGES['CONFIRM_PASSWORD_INVALID'] });
            return;
        }
        try {
            const res = await apiCall('POST', ENDPOINTS.CONFIRM_FORGET_PASSWORD, {
                user_id: get(userInfo, 'userId', ''), 
                numberVerify: verifyCode,
                password,
                confirmPassword: confirmPwd
            });
            console.log('ressss', res);
            ShowSuccessMessage(MESSAGES.RESET_PWD_SUCCESS);
            navigate(ROUTES.LOGIN);
        } catch (error) {
            console.log('errrrpr', error);
            ShowErrorMessage({ msg: extractError(error) });
        }
    }

    return <>
        <div className="hb-auth-form-title">Forgot Password</div>
        <Form onSubmit={handleSubmit}>
            <FormGroup className="mb-3">
                <FormLabel>Enter verification code</FormLabel>
                <VerifyCodeControl
                    value={verifyCode}
                    onChange={(e: any) => setVerifyCode(e.target.value)}
                    required
                    handleReset={() => {
                        setVerifyCode('');
                        setErrors(null);
                    }}
                    isFromResetPwd={true}
                />
                {errors?.code && <Form.Text className="text-error">{errors?.code}</Form.Text>}
            </FormGroup>
            <FormGroup className="mb-3">
                <FormLabel>Your password</FormLabel>
                <PasswordControl value={password} onChange={(e: any) => setPassword(e.target.value)} required />
                {errors?.password && <Form.Text className="text-error">{errors?.password}</Form.Text>}
            </FormGroup>
            <FormGroup className="mb-4">
                <FormLabel>Confirm password</FormLabel>
                <PasswordControl value={confirmPwd} onChange={(e: any) => setConfirmPwd(e.target.value)} required />
                {errors?.confirmPwd && <Form.Text className="text-error">{errors?.confirmPwd}</Form.Text>}
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
export default NewPassword