import { ErrorMessage, Field, Form, Formik } from "formik";
import { get } from "lodash";
import { useEffect, useState } from "react";
import { Button, FormControl, FormGroup, FormLabel, Modal } from "react-bootstrap";
import Countdown from "react-countdown";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { ENDPOINTS, MESSAGES, ROUTES } from "../../constants";
import { ConfirmWithdrawRequestModel, CreateWithdrawRequestModel } from "../../models";
import { confirmWithdrawRequest, createWithdrawRequest, resetWithdrawState } from "../../redux/actions/withdrawActions";
import { apiCall } from "../../redux/saga/api";
import { getWithdrawLoadingSelector, getWithdrawSuccessSelector } from "../../redux/selectors/withdrawSelectors";
import { ShowErrorMessage, ShowSuccessMessage } from "../../services/appService";
import { extractError, formatCurrency } from "../../utils/helpers";
import PasswordField from "../password-field";

interface WithdrawModalProps {
    onHide: (isSubmit?: boolean) => void
}
const WithdrawModal = ({ onHide }: WithdrawModalProps) => {
    const dashboardStatistics = useSelector(state => get(state, 'dashboard.statistics[0]', null));
    const withdrawRequest = useSelector(state => get(state, 'withdraw.withdrawRequest', null));
    const balance = get(dashboardStatistics, 'balances.dot', 0);
    const dispatch = useDispatch();
    const loading = useSelector(getWithdrawLoadingSelector);
    const success = useSelector(getWithdrawSuccessSelector);
    const [step, setStep] = useState<number>(1);
    const [currentRequest, setCurrentRequest] = useState<any>(null);
    const navigate = useNavigate();

    // Create Withdraw Request
    const handleValidateForm = (values: CreateWithdrawRequestModel) => {
        const errors: any = {};
        if (!values.amount) {
            errors.amount = MESSAGES['REQUIRED_MESSAGE'];
        } else if (!values.to) {
            errors.to = MESSAGES['REQUIRED_MESSAGE'];
        } else if (values.amount < 0 || values.amount > balance) {
            errors.amount = MESSAGES['AMOUNT_INVALID'];
        }
        return errors;
    }

    const handleSubmitForm = (values: CreateWithdrawRequestModel) => {
        if (step === 1) {
            dispatch(createWithdrawRequest(values))
        } else {

        }
    }

    useEffect(() => {
        if (withdrawRequest) {
            setStep(2);
            setCurrentRequest(withdrawRequest);
            dispatch(resetWithdrawState());
        }
    }, [withdrawRequest])


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
            await apiCall('POST', ENDPOINTS.RESEND_WITHDRAW_VERIFY_NUMBER, { withdraw_id: currentRequest.withdraw_id });
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
        dispatch(confirmWithdrawRequest({ ...values, withdraw_id: currentRequest?.id }))
    }

    useEffect(() => {
        if (success) {
            toast.success('Withdrawal Successfully!');
            dispatch(resetWithdrawState());
            onHide(true);
            navigate(ROUTES.TRANSACTIONS);
        }
    }, [success]);

    return <Modal size="sm" className="hb-modal" centered show onHide={onHide}>
        <Modal.Header closeButton>
            <Modal.Title>{step === 1 ? 'Create Withdraw Request' : 'Confirm Withdraw Request'}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            {
                step === 1 ? <>
                    <div className="form-note">
                        <ol>
                            <li>Setting up an automatic withdrawal schedule helps you save transaction fees and keep
                                your
                                accounts safe.</li>
                            <li>Daily profit will be sent to your wallet address at 8:00 UTC every day.</li>
                            <li>The system will return profits to your e-wallet if the balance in the account reaches
                                the
                                minimum amount set.</li>
                            <li>The recipient's wallet address must have at least 1 DOT</li>
                        </ol>
                    </div>
                    <Formik
                        enableReinitialize
                        initialValues={{ amount: 0, to: '' }}
                        validate={handleValidateForm}
                        onSubmit={handleSubmitForm}
                    >
                        <Form>
                            <FormGroup className="mb-3">
                                <FormLabel>Your balance</FormLabel>
                                <FormControl readOnly type='text' value={formatCurrency(balance)} className="txtbalance" />
                            </FormGroup>

                            <FormGroup className="mb-3">
                                <FormLabel>Minimum amount</FormLabel>
                                <div className="hb-form-control-wrap">
                                    <Field type='number' id="amount" name="amount" className="form-control" />
                                    <span>DOT</span>
                                </div>
                                <ErrorMessage component='div' className="form-error" name="amount" />
                            </FormGroup>

                            <FormGroup className="mb-4">
                                <FormLabel>Recipient wallet address</FormLabel>
                                <Field type='text' id="to" name="to" className="form-control" placeholder='0x' />
                                <ErrorMessage component='div' className="form-error" name="to" />
                            </FormGroup>

                            <Button type="submit" disabled={loading}>
                                <span>Continue</span>
                            </Button>
                        </Form>
                    </Formik>
                </> : <Formik
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
        </Modal.Body>
    </Modal>
}
export default WithdrawModal;