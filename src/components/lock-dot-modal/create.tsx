import { ErrorMessage, Field, Form, Formik } from "formik";
import { get } from "lodash";
import { useState } from "react";
import { Button, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { ENDPOINTS, MESSAGES } from "../../constants";
import { useActiveWeb3React } from "../../hook";
import { getDashboardStatisticsRequest } from "../../redux/actions/dashboardActions";
import { apiCall } from "../../redux/saga/api";
import { ShowErrorMessage, ShowSuccessMessage } from "../../services/appService";
import { extractError, formatNumberDownRound } from "../../utils/helpers";

const CreateWithdrawRequestForm = () => {

    const dispatch = useDispatch();

    const dashboardStatistics = useSelector(state => get(state, 'dashboard.statistics[0]', null));
    const balance = get(dashboardStatistics, 'balances.dot', 0);
    const { account } = useActiveWeb3React();

    const [loading, setLoading] = useState(false);

    // Create Withdraw Request
    const handleValidateForm = (values: any) => {
        const errors: any = {};
        if (!values.amount) {
            errors.amount = MESSAGES['REQUIRED_MESSAGE'];
        } else if (values.amount <= 0 || values.amount > balance) {
            errors.amount = MESSAGES['AMOUNT_INVALID'] + balance + '.';
        }
        return errors;
    }

    const handleSubmitForm = async (values: any) => {
        try {
            const res = await apiCall('POST', ENDPOINTS.LOCK_DOT, {
                amount: Number(values?.amount)
            })
            dispatch(getDashboardStatisticsRequest({}));
            ShowSuccessMessage(MESSAGES.LOCK_DOT_SUCCESS);
        } catch (error) {
            ShowErrorMessage({msg: extractError(error)});
        }
    }

    return <>
        {/* <div className="form-note">
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
        </div> */}
        <Formik
            enableReinitialize
            initialValues={{ amount: 0, to: String(account) }}
            validate={handleValidateForm}
            onSubmit={handleSubmitForm}
        >
            <Form>
                <FormGroup className="mb-3">
                    <FormLabel>Your balance</FormLabel>
                    <FormControl readOnly type='text' value={formatNumberDownRound(balance)} className="txtbalance" />
                </FormGroup>

                <FormGroup className="mb-3">
                    <FormLabel>Amount</FormLabel>
                    <div className="hb-form-control-wrap">
                        <Field type='number' id="amount" name="amount" className="form-control" />
                        <span>DOT</span>
                    </div>
                    <ErrorMessage component='div' className="form-error" name="amount" />
                </FormGroup>

                <Button type="submit" disabled={false}>
                    <span>Confirm</span>
                </Button>
            </Form>
        </Formik>
    </>
}
export default CreateWithdrawRequestForm;