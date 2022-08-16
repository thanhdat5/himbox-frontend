import { ErrorMessage, Form, Formik } from "formik";
import { useEffect, useRef } from "react";
import { Button, FormGroup, FormLabel } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import HBCard from "../../../components/card";
import PasswordField from "../../../components/password-field";
import { MESSAGES } from "../../../constants";
import { UserChangePasswordRequestModel } from "../../../models";
import { changePasswordRequest } from "../../../redux/actions/userActions";
import { getChangePasswordSuccessSelector, getUserLoadingSelector } from "../../../redux/selectors/userSelectors";
import { validatePwd } from "../../../utils/helpers";

const HBProfileChangePassword = () => {
    const dispatch = useDispatch();
    const formRef = useRef<any>(null);
    const loading = useSelector(getUserLoadingSelector);
    const success = useSelector(getChangePasswordSuccessSelector);
    const initialValues: UserChangePasswordRequestModel = {
        oldPassword: '',
        newPassword: '',
        confirmNewPassword: ''
    };

    const handleValidateForm = (values: UserChangePasswordRequestModel) => {
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

    const handleSubmitForm = (values: UserChangePasswordRequestModel) => {
        dispatch(changePasswordRequest(values));
    }

    useEffect(() => {
        if (success) {
            formRef.current.handleReset();
        }
    }, [success])

    return <HBCard className="mb-md-4 mb-3">
        <Formik
            innerRef={formRef}
            enableReinitialize
            initialValues={initialValues}
            validate={handleValidateForm}
            onSubmit={handleSubmitForm}
        >
            <Form>
                <FormGroup className="mb-3">
                    <FormLabel>Current Password</FormLabel>
                    <PasswordField name="oldPassword" />
                    <ErrorMessage component='div' className="form-error" name="oldPassword" />
                </FormGroup>

                <FormGroup className="mb-3">
                    <FormLabel>New Password</FormLabel>
                    <PasswordField name="newPassword" />
                    <ErrorMessage component='div' className="form-error" name="newPassword" />
                </FormGroup>

                <FormGroup className="mb-4">
                    <FormLabel>Confirm Password</FormLabel>
                    <PasswordField name="confirmNewPassword" />
                    <ErrorMessage component='div' className="form-error" name="confirmNewPassword" />
                </FormGroup>

                <Button type="submit" disabled={loading}>
                    <span>Change password</span>
                </Button>
            </Form>
        </Formik>
    </HBCard>
}
export default HBProfileChangePassword