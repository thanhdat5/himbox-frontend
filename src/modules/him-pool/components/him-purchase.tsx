import { ErrorMessage, Form, Formik, Field } from "formik";
import { useEffect, useRef } from "react";
import { Button, FormGroup, FormLabel, FormControl } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import HBCard from "../../../components/card";
import { MESSAGES } from "../../../constants";
import { changePasswordRequest } from "../../../redux/actions/userActions";
import { useUsdtBalance } from "../../../state/wallet/hook";
import { formatNumberDownRound, validatePwd } from "../../../utils/helpers";

const HBHimPurchase = () => {
    const dispatch = useDispatch();
    const formRef = useRef<any>(null);

    const usdtBal = useUsdtBalance();

    const handleValidateForm = (values: any) => {
        const errors: any = {};
        if (!values.oldPassword) {
            errors.oldPassword = MESSAGES['REQUIRED_MESSAGE'];
        } else if (!values.newPassword) {
            errors.newPassword = MESSAGES['REQUIRED_MESSAGE'];
        } else if (!values.confirmNewPassword) {
            errors.confirmNewPassword = MESSAGES['REQUIRED_MESSAGE'];
        } else if (!validatePwd(values.oldPassword)) {
            errors.oldPassword = MESSAGES['PASSWORD_FORMAT_INVALID'];
        } else if (!validatePwd(values.newPassword)) {
            errors.newPassword = MESSAGES['PASSWORD_FORMAT_INVALID'];
        } else if (!validatePwd(values.confirmNewPassword)) {
            errors.confirmNewPassword = MESSAGES['PASSWORD_FORMAT_INVALID'];
        } else if (values.newPassword !== values.confirmNewPassword) {
            errors.confirmNewPassword = MESSAGES['CONFIRM_PASSWORD_INVALID'];
        }
        return errors;
    }

    const handleSubmitForm = (values: any) => {

    }

    return <HBCard className="mb-md-4 mb-3 h-100-md-4-3">
        <Formik
            innerRef={formRef}
            enableReinitialize
            initialValues={{ balance: formatNumberDownRound(usdtBal) }}
            validate={handleValidateForm}
            onSubmit={handleSubmitForm}
        >
            <Form>
                <FormGroup className="mb-3">
                    <FormLabel>Your balance</FormLabel>
                    {/* <FormControl readOnly type='text' value={formatNumberDownRound(usdtBal)} className="txtbalance" /> */}
                    <div className="hb-form-control-wrap">
                        <FormControl readOnly type='text' value={formatNumberDownRound(usdtBal)} className="txtbalance" />
                        <span>USDT</span>
                    </div>
                    <div className="form-description">Price: <b>1 HIM</b> = <b>0.1 USDT</b></div>
                </FormGroup>

                <FormGroup className="mb-3">
                    <FormLabel>Amount</FormLabel>
                    <div className="hb-form-control-wrap">
                        <Field type='number' id="amount" name="amount" className="form-control" />
                        <span>DOT</span>
                    </div>
                    <div className="form-description">= <b>10 HIM</b></div>
                    <ErrorMessage component='div' className="form-error" name="amount" />
                </FormGroup>

                <Button type="submit" disabled={false}>
                    <span>Purchase</span>
                </Button>

                <div className="form-note mb-0 mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque eaque, provident reiciendis...
                </div>
            </Form>
        </Formik>
    </HBCard>
}
export default HBHimPurchase