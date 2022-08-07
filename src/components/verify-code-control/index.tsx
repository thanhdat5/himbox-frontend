import { FormControl } from "react-bootstrap";

interface VerifyCodeControlProps {
    value: string;
    onChange: any;
    required?: boolean;
}
const VerifyCodeControl = ({ value, onChange, required }: VerifyCodeControlProps) => {
    const handleGetCode = () => {

    }

    return <div className="hb-form-control-wrap">
        <FormControl value={value} onChange={onChange} required={required}/>
        <span className="hb-auth-form-link" style={{ cursor: 'pointer' }} onClick={handleGetCode}>Get code</span>
    </div>
}
export default VerifyCodeControl;