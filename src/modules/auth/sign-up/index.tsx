import { useEffect, useState } from "react";
import { Button, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import PasswordControl from "../../../components/password-control";
import { ROUTES } from "../../../constants";
import { signUpRequest } from "../../../redux/actions/signUpActions";
import { getSignUpErrorSelector, getSignUpLoadingSelector, getSignUpSuccessSelector } from "../../../redux/selectors/signUpSelectors";

const SignUp = () => {
    const dispatch = useDispatch();
    const loading = useSelector(getSignUpLoadingSelector);
    const success = useSelector(getSignUpSuccessSelector);
    const error = useSelector(getSignUpErrorSelector);

    const navigate = useNavigate();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [referralId, setReferralId] = useState<string>('');
    const [agree, setAgree] = useState<boolean>(false);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const postData = { email, password, referralId };
        dispatch(signUpRequest(postData));
    }

    useEffect(() => {
        if (success) {
            toast.success('Sign Up Successfully!');
            navigate(ROUTES.LOGIN);
        }
    }, [success]);

    useEffect(() => {
        if (error) {
            toast.error(error);
        }
    }, [error]);

    return <>
        <div className="hb-auth-form-title">Create an account</div>
        <Form onSubmit={handleSubmit}>
            <FormGroup className="mb-3">
                <FormLabel>Your email address</FormLabel>
                <FormControl value={email} onChange={(e: any) => setEmail(e.target.value)} required type="email" />
            </FormGroup>

            <FormGroup className="mb-3">
                <FormLabel>Your password</FormLabel>
                <PasswordControl value={password} onChange={(e: any) => setPassword(e.target.value)} required />
            </FormGroup>

            <FormGroup className="mb-3">
                <FormLabel>Referral ID (Optional)</FormLabel>
                <FormControl value={referralId} onChange={(e: any) => setReferralId(e.target.value)} />
            </FormGroup>

            <FormGroup className="mb-4">
                <Form.Check checked={agree} onChange={(e: any) => setAgree(e.target.checked)} type="checkbox" label="I agree to share data for marketing purposes" />
            </FormGroup>

            <Button type="submit" className="w-100" disabled={!agree || loading}>
                <span>Sign Up</span>
            </Button>
        </Form>
        <div className="hb-auth-form-note">
            Already have an account? <Link className="hb-auth-form-link" to={ROUTES.LOGIN}>Login</Link>
        </div>
    </>
}
export default SignUp