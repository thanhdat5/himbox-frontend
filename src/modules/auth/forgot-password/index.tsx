import { get } from "lodash";
import { useEffect, useState } from "react";
import { Button, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import VerifyCodeControl from "../../../components/verify-code-control";
import { ENDPOINTS, MESSAGES, ROUTES } from "../../../constants";
import { recoverPasswordRequest } from "../../../redux/actions/forgotPasswordActions";
import { verifyAccountRequest } from "../../../redux/actions/verifyAccountActions";
import { apiCall } from "../../../redux/saga/api";
import { getForgotPasswordLoadingSelector, getForgotPasswordSuccessSelector } from "../../../redux/selectors/forgotPasswordSelectors";
import { VERIFY_REQUEST } from "../../../redux/types/signUp";
import { ShowErrorMessage, ShowSuccessMessage } from "../../../services/appService";
import { extractError, validateEmail } from "../../../utils/helpers";
import { history } from "../../../utils/history";

const ForgotPassword = () => {
    const dispatch = useDispatch();
    const loading = useSelector(getForgotPasswordLoadingSelector);
    const success = useSelector(getForgotPasswordSuccessSelector);

    const navigate = useNavigate();
    const [email, setEmail] = useState<string>('tungbt2@gmail.com');
    const [errors, setErrors] = useState<any>(null);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setErrors(null);
        if (!validateEmail(email)) {
            setErrors({ email: MESSAGES.EMAIL_INVALID });
            return;
        }
        try {
            const res = await apiCall('POST', ENDPOINTS.FORGET_PASSWORD, { email });
            console.log('resss', res);
            dispatch({
                type: VERIFY_REQUEST,
                payload: { userId: get(res, 'data.data.user_id', ''), username: email }
            });
            history.push(ROUTES.NEW_PASSWORD);
            ShowSuccessMessage(MESSAGES.VERIFY_GUIDE);
        } catch (error) {
            ShowErrorMessage({ message: extractError(error) });
        }
    }

    useEffect(() => {
        if (success) {
            navigate(ROUTES.LOGIN);
        }
    }, [success]);

    return <>
        <div className="hb-auth-form-title">Forgot Password</div>
        <Form onSubmit={handleSubmit}>
            <FormGroup className="mb-3">
                <FormLabel>Your email address</FormLabel>
                <FormControl required value={email} onChange={(e: any) => setEmail(e.target.value)} type="email" />
                {errors?.email && <Form.Text className="text-error">{errors?.email}</Form.Text>}
            </FormGroup>

            <Button type="submit" className="w-100" disabled={loading}>
                <span>Confirm</span>
            </Button>
        </Form>
        <div className="hb-auth-form-note">
            Back to <Link className="hb-auth-form-link" to={ROUTES.LOGIN}>Login</Link>
        </div>
    </>
}
export default ForgotPassword