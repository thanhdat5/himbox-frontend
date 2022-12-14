import React, { useState, useEffect } from 'react';
import { FormControl } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Countdown from 'react-countdown';
import { sendVerifyCodeRequest } from "../../redux/actions/forgotPasswordActions";
import { getForgotPasswordLoadingSelector } from "../../redux/selectors/forgotPasswordSelectors";
import { apiCall } from '../../redux/saga/api';
import { ENDPOINTS, MESSAGES, ROUTES } from '../../constants';
import { getVerifyUserInfo } from '../../redux/selectors/signUpSelectors';
import { get } from 'lodash';
import { ShowErrorMessage, ShowSuccessMessage } from '../../services/appService';
import { extractError } from '../../utils/helpers';
import { useNavigate } from 'react-router-dom';


const COUNTDOWN_DURATION = 600 * 1000;
interface VerifyCodeControlProps {
    value: string;
    onChange: any;
    required?: boolean;
    showResend?: boolean;
    handleReset?: (e: any) => void;
    isFromResetPwd?: boolean;
}
const VerifyCodeControl = ({ value, onChange, required, showResend, isFromResetPwd = false, handleReset = () => { } }: VerifyCodeControlProps) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userInfo = useSelector(getVerifyUserInfo);

    const [showCountdown, setShowCountdown] = useState<boolean>(true);
    const [timeCd, setTimeCd] = useState<number>(Date.now() + COUNTDOWN_DURATION);

    useEffect(() => {
        setTimeCd(Date.now() + COUNTDOWN_DURATION);
        setShowCountdown(true);
    }, [showResend]);

    const handleResendCode = async (e: any) => {
        e.preventDefault();
        try {
            const data = await apiCall('POST', ENDPOINTS.RESEND_VERIFY_MAIL, {
                username: get(userInfo, 'username', '')
            });
            handleReset(0);
            setTimeCd(Date.now() + COUNTDOWN_DURATION);
            setShowCountdown(true);
            ShowSuccessMessage(MESSAGES.OTP_RESEND_OK);
        } catch (e: any) {
            console.log('eeeee', e);
            if (get(e, 'response.data.msg', '') === "User account has been verified") {
                navigate(ROUTES.LOGIN);
            }
            ShowErrorMessage({ msg: extractError(e) });
        }

    }

    const rendererCountdown = ({ minutes, seconds, completed }: any) => {
        if (completed) {
            return <span></span>
        } else {
            return <span style={{ cursor: 'pointer', opacity: 0.5 }}>
                ({minutes}m:{seconds}s)
            </span>
        }
    }

    const onComplete = () => {
        setShowCountdown(false);
    }

    return <div className="hb-form-control-wrap">
        <FormControl value={value} onChange={onChange} required={required} />
        {showCountdown ?
            <span>
                <Countdown onComplete={onComplete} date={timeCd} renderer={rendererCountdown} />
            </span>
            :
            !isFromResetPwd ?
                <span onClick={handleResendCode} className="hb-auth-form-link">
                    Resend
                </span>
                :
                <span></span>
        }
    </div>
}
export default VerifyCodeControl;