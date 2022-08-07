import { useState } from "react";
import { Button, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import VerifyCodeControl from "../../../components/verify-code-control";
import { ROUTES } from "../../../constants";

const ForgotPassword = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState<string>('');
    const [verifyCode, setVerifyCode] = useState<string>('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // const postData = { email, verifyCode };
        navigate(ROUTES.LOGIN);
    }

    return <>
        <div className="hb-auth-form-title">Forgot Password</div>
        <Form onSubmit={handleSubmit}>
            <FormGroup className="mb-3">
                <FormLabel>Your email address</FormLabel>
                <FormControl required value={email} onChange={(e: any) => setEmail(e.target.value)} type="email" />
            </FormGroup>

            <FormGroup className="mb-4">
                <FormLabel>Enter veryfication code</FormLabel>
                <VerifyCodeControl value={verifyCode} onChange={(e: any) => setVerifyCode(e.target.value)} required />
            </FormGroup>

            <Button type="submit" className="w-100">
                <span>Recover</span>
            </Button>
        </Form>
        <div className="hb-auth-form-note">
            Back to <Link className="hb-auth-form-link" to={ROUTES.LOGIN}>Login</Link>
        </div>
    </>
}
export default ForgotPassword