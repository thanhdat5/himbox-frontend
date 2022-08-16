import { useEffect, useState } from "react";
import { Button, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import HBCard from "../../../components/card";
import { HIMBOX_USER_INFO } from "../../../constants";
import { disable2FARequest, enable2FARequest, generate2FARequest } from "../../../redux/actions/userActions";
import { getDisable2FASuccessSelector, getEnable2FASuccessSelector, getGenerate2FASelector } from "../../../redux/selectors/userSelectors";
import QRScanModal from "./qr-scan-modal";

const HBProfileVerify = ({ userLogged }: any) => {
    const dispatch = useDispatch();
    const [token, setToken] = useState<string>('');
    const [enable2FA, setEnable2FA] = useState<boolean>(userLogged?.tfa || false);
    const [show2FAConfig, setShow2FAConfig] = useState<boolean | null>(null);
    const [showScanModal, setShowScanModal] = useState(false);
    const twoFA = useSelector(getGenerate2FASelector);
    const activeSuccess = useSelector(getEnable2FASuccessSelector);
    const deactiveSuccess = useSelector(getDisable2FASuccessSelector);

    useEffect(() => {
        if (twoFA) {
            setEnable2FA(true);
            setShow2FAConfig(true);
        }
    }, [twoFA])

    useEffect(() => {
        if (activeSuccess || deactiveSuccess) {
            setEnable2FA(enable2FA);
            setShow2FAConfig(null);
            localStorage.setItem(HIMBOX_USER_INFO, JSON.stringify({ ...userLogged, tfa: enable2FA }));
        }
    }, [activeSuccess, deactiveSuccess])

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (enable2FA) {
            dispatch(enable2FARequest({ token }));
        } else {
            dispatch(disable2FARequest({ token }));
        }
    }

    const handleToggle2FA = (e: any) => {
        setToken('');
        if (e.target.checked === userLogged?.tfa) {
            return
        }
        if (e.target.checked) {
            dispatch(generate2FARequest({}));
        } else {
            setEnable2FA(false);
            setShow2FAConfig(true);
        }
    }

    return <HBCard>
        <Form onSubmit={handleSubmit}>
            <FormGroup className="mb-3">
                <Form.Check
                    checked={enable2FA || false}
                    onChange={handleToggle2FA}
                    className="form-switch-lg"
                    type="switch"
                    id="sw2FA2"
                    label="2FA Authenticator"
                />
            </FormGroup>

            {
                show2FAConfig !== null ? <>
                    {enable2FA ? <FormGroup className="mb-3">
                        <FormLabel>
                            <div className="mb-3">Set up Google Authenticator to generate login codes.</div>
                            <div className="d-flex align-items-center mb-3" style={{ gap: '16px' }}>
                                <a target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&amp;hl=vi&amp;gl=US">
                                    <img src="/images/google-play-logo.png" height="42" alt="google-play" />
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="https://apps.apple.com/us/app/google-authenticator/id388497605">
                                    <img src="/images/app-store.png" height="42" alt="app-store" />
                                </a>
                            </div>
                            <div>Please use your authentication app to scan this QR code.</div>
                        </FormLabel>
                        <div className="hb-form-control-wrap">
                            <FormControl required readOnly value={twoFA?.stringQR} />
                            <span style={{ cursor: 'pointer' }} onClick={() => setShowScanModal(true)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px"
                                    viewBox="0 0 24 24" data-name="Layer 1">
                                    <path fill="currentColor" d="M8,21H4a1,1,0,0,1-1-1V16a1,1,0,0,0-2,0v4a3,3,0,0,0,3,3H8a1,1,0,0,0,0-2Zm14-6a1,1,0,0,0-1,1v4a1,1,0,0,1-1,1H16a1,1,0,0,0,0,2h4a3,3,0,0,0,3-3V16A1,1,0,0,0,22,15ZM20,1H16a1,1,0,0,0,0,2h4a1,1,0,0,1,1,1V8a1,1,0,0,0,2,0V4A3,3,0,0,0,20,1ZM2,9A1,1,0,0,0,3,8V4A1,1,0,0,1,4,3H8A1,1,0,0,0,8,1H4A3,3,0,0,0,1,4V8A1,1,0,0,0,2,9Zm8-4H6A1,1,0,0,0,5,6v4a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V6A1,1,0,0,0,10,5ZM9,9H7V7H9Zm5,2h4a1,1,0,0,0,1-1V6a1,1,0,0,0-1-1H14a1,1,0,0,0-1,1v4A1,1,0,0,0,14,11Zm1-4h2V9H15Zm-5,6H6a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V14A1,1,0,0,0,10,13ZM9,17H7V15H9Zm5-1a1,1,0,0,0,1-1,1,1,0,0,0,0-2H14a1,1,0,0,0-1,1v1A1,1,0,0,0,14,16Zm4-3a1,1,0,0,0-1,1v3a1,1,0,0,0,0,2h1a1,1,0,0,0,1-1V14A1,1,0,0,0,18,13Zm-4,4a1,1,0,1,0,1,1A1,1,0,0,0,14,17Z" />
                                </svg>
                            </span>
                        </div>
                    </FormGroup> : <></>}

                    <FormGroup className="mb-4">
                        <FormLabel>Verify code</FormLabel>
                        <FormControl required value={token} onChange={(e) => setToken(e.target.value)} />
                    </FormGroup>

                    <Button type="submit">
                        <span>{enable2FA ? 'Active' : 'Deactive'}</span>
                    </Button>
                </> : <></>
            }
        </Form>

        {
            showScanModal ? <QRScanModal onDismiss={() => setShowScanModal(false)} path={twoFA?.path} code={twoFA?.stringQR} /> : <></>
        }
    </HBCard>
}
export default HBProfileVerify