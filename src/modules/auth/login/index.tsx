import { useState } from "react";
import { Button, Col, Form, FormControl, FormGroup, FormLabel, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import PasswordControl from "../../../components/password-control";
import { HIMBOX_ACCESS_TOKEN, ROUTES } from "../../../constants";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [remember, setRemember] = useState<boolean>(true);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // const postData = { email, password, remember };
        localStorage.setItem(HIMBOX_ACCESS_TOKEN, 'logged');
        navigate(ROUTES.DASHBOARD);
    }

    return <>
        <div className="hb-auth-form-title">Login</div>
        <Form onSubmit={handleSubmit}>
            <FormGroup className="mb-3">
                <FormLabel>Your email address</FormLabel>
                <FormControl value={email} onChange={(e: any) => setEmail(e.target.value)} required type="email" />
            </FormGroup>

            <FormGroup className="mb-3">
                <FormLabel>Your password</FormLabel>
                <PasswordControl value={password} onChange={(e: any) => setPassword(e.target.value)} required />
            </FormGroup>

            <FormGroup className="mb-4">
                <Row>
                    <Col>
                        <Form.Check checked={remember} onChange={(e: any) => setRemember(e.target.checked)} type="checkbox" label="Remember me" />
                    </Col>
                    <Col className="text-end">
                        <Link to={ROUTES.FORGOT_PASSWORD} className="hb-auth-form-link">Forgot password?</Link>
                    </Col>
                </Row>
            </FormGroup>

            <Button type="submit" className="w-100">
                <span>Login</span>
            </Button>
        </Form>
        <div className="hb-auth-form-note">
            Don't have an account? <Link className="hb-auth-form-link" to={ROUTES.SIGN_UP}>Sign Up</Link>
        </div>
    </>
}
export default Login