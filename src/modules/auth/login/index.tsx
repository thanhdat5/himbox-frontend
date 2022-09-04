import { get } from "lodash";
import { useEffect, useState } from "react";
import { Button, Col, Form, FormControl, FormGroup, FormLabel, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PasswordControl from "../../../components/password-control";
import { MESSAGES, ROUTES } from "../../../constants";
import { loginRequest } from "../../../redux/actions/loginActions";
import { getLoginLoadingSelector, getLoginSuccessSelector } from "../../../redux/selectors/loginSelectors";
import { TFA_ACTION } from "../../../redux/types/login";
import { validateEmail } from "../../../utils/helpers";
import VeryfyCodeModal from "./verify-code-modal";

const Login = () => {
    const dispatch = useDispatch();
    const loading = useSelector(getLoginLoadingSelector);
    const success = useSelector(getLoginSuccessSelector);
    const showTfa = useSelector(state => get(state, 'login.showTfa', false));
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [errors, setErrors] = useState<any>(null);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setErrors(null);
        if (!validateEmail(email)) {
            setErrors({ email: MESSAGES['EMAIL_INVALID'] });
            return;
        }
        const postData = { username: email, password };
        dispatch(loginRequest(postData));
    }

    const handleVerifyCodeDismiss = (e: string) => {
        dispatch({type: TFA_ACTION, payload: false});
        if (e) {
            const postData = { username: email, password, tfa_code: e };
            dispatch(loginRequest(postData));
        }
    }

    return <>
        <div className="hb-auth-form-title">&nbsp;</div>
        <Form onSubmit={handleSubmit}>
            <FormGroup className="mb-3">
                <FormLabel>Your email address</FormLabel>
                <FormControl value={email} onChange={(e: any) => setEmail(e.target.value)} required type="email" />
                {errors?.email && <Form.Text className="text-error">{errors?.email}</Form.Text>}
            </FormGroup>

            <FormGroup className="mb-3">
                <FormLabel>Your password</FormLabel>
                <PasswordControl value={password} onChange={(e: any) => setPassword(e.target.value)} required />
            </FormGroup>

            <FormGroup className="mb-4">
                <Row>
                    {/* <Col>
                        <Form.Check checked={remember} onChange={(e: any) => setRemember(e.target.checked)} type="checkbox" label="Remember me" />
                    </Col> */}
                    <Col className="text-end">
                        <Link to={ROUTES.FORGET_PASSWORD} className="hb-auth-form-link">Forgot password?</Link>
                    </Col>
                </Row>
            </FormGroup>

            <Button type="submit" className="w-100" disabled={loading}>
                <span>Login</span>
            </Button>
        </Form>
        <div className="hb-auth-form-note">
            Don't have an account? <Link className="hb-auth-form-link" to={ROUTES.SIGN_UP}>Sign Up</Link>
        </div>
        {showTfa ? <VeryfyCodeModal onDismiss={handleVerifyCodeDismiss} /> : <></>}
    </>
}
export default Login