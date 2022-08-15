import { useEffect, useState } from "react";
import { Button, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import PasswordControl from "../../../components/password-control";
import { MESSAGES, ROUTES } from "../../../constants";
import { signUpRequest } from "../../../redux/actions/signUpActions";
import { getSignUpLoadingSelector, getSignUpSuccessSelector } from "../../../redux/selectors/signUpSelectors";
import { validateEmail, validatePwd } from "../../../utils/helpers";

const SignUp = () => {
    const dispatch = useDispatch();
    const loading = useSelector(getSignUpLoadingSelector);
    const success = useSelector(getSignUpSuccessSelector);

    const location = useLocation();

    const navigate = useNavigate();
    const [email, setEmail] = useState<string>('tungbt1994@gmail.com');
    const [password, setPassword] = useState<string>('Abcde12345!');
    const [confirmPwd, setConfirmPwd] = useState<string>('Abcde12345!');
    const [referralId, setReferralId] = useState<string>('');
    const [agree, setAgree] = useState<boolean>(true);
    const [errors, setErrors] = useState<any>(null);

    useEffect(() => {
        if (location.search && location.search.includes('=')) {
            console.log('location.sea', location.search);
            const temp = location.search.split('=');
            if (temp.length == 2) {
                setReferralId(temp[1]);
            }
        }
    }, [location.search]);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        await setErrors(null);
        if (!validateEmail(email)) {
            setErrors({ email: MESSAGES['EMAIL_INVALID'] });
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
        const postData = { email, password, confirmPassword: confirmPwd, referrer: referralId };
        dispatch(signUpRequest(postData));
    }

    // useEffect(() => {
    //     if (success) {
    //         toast.success(MESSAGES.VERIFY_GUIDE);
    //     }
    // }, [success]);

    return <>
        <div className="hb-auth-form-title">Create an account</div>
        <Form onSubmit={handleSubmit}>
            <FormGroup className="mb-3">
                <FormLabel>Your email address</FormLabel>
                <FormControl value={email} onChange={(e: any) => setEmail(e.target.value)} required type="email" />
                {errors?.email && <Form.Text className="text-error">{errors?.email}</Form.Text>}
            </FormGroup>

            <FormGroup className="mb-3">
                <FormLabel>Your password</FormLabel>
                <PasswordControl value={password} onChange={(e: any) => setPassword(e.target.value)} required />
                {errors?.password && <Form.Text className="text-error">{errors?.password}</Form.Text>}
            </FormGroup>
            <FormGroup className="mb-3">
                <FormLabel>Confirm password</FormLabel>
                <PasswordControl value={confirmPwd} onChange={(e: any) => setConfirmPwd(e.target.value)} required />
                {errors?.confirmPwd && <Form.Text className="text-error">{errors?.confirmPwd}</Form.Text>}
            </FormGroup>

            <FormGroup className="mb-3">
                <FormLabel>Referral ID (Optional)</FormLabel>
                <FormControl value={referralId} onChange={(e: any) => setReferralId(e.target.value)} />
            </FormGroup>

            <FormGroup className="mb-4">
                <Form.Check checked={agree} onChange={(e: any) => setAgree(e.target.checked)} type="checkbox" label="I agree to the Terms of Service" />
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