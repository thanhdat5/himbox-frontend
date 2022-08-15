import { useState } from "react";
import { Button, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { useDispatch } from "react-redux";
import HBCard from "../../../components/card";
import { enable2FARequest } from "../../../redux/actions/userActions";

const HBProfileVerify = () => {
    const dispatch = useDispatch();
    const [enable2FA, setEnable2FA] = useState(false);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        dispatch(enable2FARequest({ enable2FA, productKey: '', verifyCode: '' }));
        console.log(enable2FA);
    }

    return <HBCard>
        <Form onSubmit={handleSubmit}>
            <FormGroup className="mb-3">
                <Form.Check
                    checked={enable2FA}
                    onChange={(e: any) => setEnable2FA(e.target.checked)}
                    className="form-switch-lg"
                    type="switch"
                    id="sw2FA2"
                    label="2FA Authenticator"
                />
            </FormGroup>

            {
                enable2FA ? <>
                    <FormGroup className="mb-3">
                        <FormLabel>Product Key</FormLabel>
                        <div className="hb-form-control-wrap">
                            <FormControl required readOnly value="558439" />
                            <span style={{ cursor: 'pointer' }} data-bs-toggle="modal" data-bs-target="#QRModal">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px"
                                    viewBox="0 0 24 24" data-name="Layer 1">
                                    <path fill="currentColor" d="M8,21H4a1,1,0,0,1-1-1V16a1,1,0,0,0-2,0v4a3,3,0,0,0,3,3H8a1,1,0,0,0,0-2Zm14-6a1,1,0,0,0-1,1v4a1,1,0,0,1-1,1H16a1,1,0,0,0,0,2h4a3,3,0,0,0,3-3V16A1,1,0,0,0,22,15ZM20,1H16a1,1,0,0,0,0,2h4a1,1,0,0,1,1,1V8a1,1,0,0,0,2,0V4A3,3,0,0,0,20,1ZM2,9A1,1,0,0,0,3,8V4A1,1,0,0,1,4,3H8A1,1,0,0,0,8,1H4A3,3,0,0,0,1,4V8A1,1,0,0,0,2,9Zm8-4H6A1,1,0,0,0,5,6v4a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V6A1,1,0,0,0,10,5ZM9,9H7V7H9Zm5,2h4a1,1,0,0,0,1-1V6a1,1,0,0,0-1-1H14a1,1,0,0,0-1,1v4A1,1,0,0,0,14,11Zm1-4h2V9H15Zm-5,6H6a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V14A1,1,0,0,0,10,13ZM9,17H7V15H9Zm5-1a1,1,0,0,0,1-1,1,1,0,0,0,0-2H14a1,1,0,0,0-1,1v1A1,1,0,0,0,14,16Zm4-3a1,1,0,0,0-1,1v3a1,1,0,0,0,0,2h1a1,1,0,0,0,1-1V14A1,1,0,0,0,18,13Zm-4,4a1,1,0,1,0,1,1A1,1,0,0,0,14,17Z" />
                                </svg>
                            </span>
                        </div>
                    </FormGroup>

                    <FormGroup className="mb-4">
                        <FormLabel>Verify code</FormLabel>
                        <FormControl required readOnly value="FB2AIZQ7NBUASJDG" />
                    </FormGroup>

                    <Button type="submit">
                        <span>Verify</span>
                    </Button>
                </> : <></>
            }
        </Form>
    </HBCard>
}
export default HBProfileVerify