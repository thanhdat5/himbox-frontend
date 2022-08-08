import { FormControl } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { sendVerifyCodeRequest } from "../../redux/actions/forgotPasswordActions";
import { getForgotPasswordLoadingSelector } from "../../redux/selectors/forgotPasswordSelectors";

interface VerifyCodeControlProps {
    value: string;
    onChange: any;
    required?: boolean;
}
const VerifyCodeControl = ({ value, onChange, required }: VerifyCodeControlProps) => {
    const dispatch = useDispatch();
    const loading = useSelector(getForgotPasswordLoadingSelector);

    const handleGetCode = () => {
        if (!loading) {
            dispatch(sendVerifyCodeRequest({ email: value, type: 'forgot-password' }));
        }
    }

    return <div className="hb-form-control-wrap">
        <FormControl value={value} onChange={onChange} required={required} />
        <span className="hb-auth-form-link" style={{ cursor: 'pointer', opacity: loading ? 0.5 : 1 }} onClick={handleGetCode}>Get code</span>
    </div>
}
export default VerifyCodeControl;