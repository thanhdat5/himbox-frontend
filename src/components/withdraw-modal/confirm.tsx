import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { Button, FormGroup, FormLabel } from "react-bootstrap";
import Countdown from "react-countdown";
import { useDispatch, useSelector } from "react-redux";
import { ENDPOINTS, MESSAGES } from "../../constants";
import { ConfirmWithdrawRequestModel } from "../../models";
import { confirmWithdrawRequest } from "../../redux/actions/withdrawActions";
import { apiCall } from "../../redux/saga/api";
import { getWithdrawLoadingSelector } from "../../redux/selectors/withdrawSelectors";
import { ShowErrorMessage, ShowSuccessMessage } from "../../services/appService";
import { extractError } from "../../utils/helpers";
import PasswordField from "../password-field";

interface ConfirmWithdrawProps {
    withdraw_id: string;
}
const ConfirmWithdraw = ({ withdraw_id }: ConfirmWithdrawProps) => {
    const dispatch = useDispatch();
    const loading = useSelector(getWithdrawLoadingSelector);

    // Confirm Withdraw Request
    const COUNTDOWN_DURATION = 600 * 1000;
    const [showResend, setShowResend] = useState(false);
    const [timeCd, setTimeCd] = useState<number>(Date.now() + COUNTDOWN_DURATION);

    useEffect(() => {
        setTimeCd(Date.now() + COUNTDOWN_DURATION);
    }, [showResend]);

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
        setShowResend(true);
    }

    const handleResendCode = async () => {
        try {
            await apiCall('POST', ENDPOINTS.RESEND_WITHDRAW_VERIFY_NUMBER, { withdraw_id });
            setTimeCd(Date.now() + COUNTDOWN_DURATION);
            setShowResend(false);
            ShowSuccessMessage(MESSAGES.OTP_RESEND_OK);
        } catch (e: any) {
            ShowErrorMessage({ msg: extractError(e) });
        }
    }

    const handleValidateFormConfirm = (values: ConfirmWithdrawRequestModel) => {
        const errors: any = {};
        if (!values.tfa_code) {
            errors.tfa_code = MESSAGES['REQUIRED_MESSAGE'];
        } else if (!values.password) {
            errors.password = MESSAGES['REQUIRED_MESSAGE'];
        } else if (!values.number_verify) {
            errors.number_verify = MESSAGES['REQUIRED_MESSAGE'];
        }
        return errors;
    }

    const handleSubmitFormConfirm = (values: ConfirmWithdrawRequestModel) => {
        dispatch(confirmWithdrawRequest({ ...values, withdraw_id }))
    }

    return <Formik
        enableReinitialize
        initialValues={{ tfa_code: '', password: '', number_verify: '' }}
        validate={handleValidateFormConfirm}
        onSubmit={handleSubmitFormConfirm}
    >
        <Form>
            <FormGroup className="mb-4">
                <FormLabel>Verification code</FormLabel>
                <Field type='text' id="tfa_code" name="tfa_code" className="form-control" placeholder='2FA Verify Code' />
                <ErrorMessage component='div' className="form-error" name="tfa_code" />
            </FormGroup>

            <FormGroup className="mb-3">
                <FormLabel>Password</FormLabel>
                <PasswordField name="password" />
                <ErrorMessage component='div' className="form-error" name="password" />
            </FormGroup>

            <FormGroup className="mb-4">
                <FormLabel>Email verification code</FormLabel>
                <div className="hb-form-control-wrap">
                    <Field type='text' id="number_verify" name="number_verify" className="form-control" />
                    {showResend ?
                        <span onClick={handleResendCode} className="hb-auth-form-link">Resend</span> : <Countdown onComplete={onComplete} date={timeCd} renderer={rendererCountdown} />
                    }
                </div>
                <ErrorMessage component='div' className="form-error" name="number_verify" />
            </FormGroup>

            <Button type="submit" disabled={loading}>
                <span>Confirm</span>
            </Button>
        </Form>
    </Formik>
}
export default ConfirmWithdraw;