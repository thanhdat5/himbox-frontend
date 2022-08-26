import { ErrorMessage, Field, Form, Formik } from "formik";
import { get } from "lodash";
import { Button, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { MESSAGES } from "../../constants";
import { useActiveWeb3React } from "../../hook";
import { CreateWithdrawRequestModel } from "../../models";
import { createWithdrawRequest } from "../../redux/actions/withdrawActions";
import { getWithdrawLoadingSelector } from "../../redux/selectors/withdrawSelectors";
import { formatNumberDownRound } from "../../utils/helpers";

const CreateWithdrawRequestForm = () => {

    const Web3 = require('web3');
    const dashboardStatistics = useSelector(state => get(state, 'dashboard.statistics[0]', null));
    const balance = get(dashboardStatistics, 'balances.dot', 0);
    const { account } = useActiveWeb3React();
    const dispatch = useDispatch();
    const loading = useSelector(getWithdrawLoadingSelector);

    // Create Withdraw Request
    const handleValidateForm = (values: CreateWithdrawRequestModel) => {
        const errors: any = {};
        let walletIsValid = false;
        try {
            if (values.to) {
                walletIsValid = Web3.utils.isAddress(Web3.utils.toChecksumAddress(values.to));
            }
        } catch (err) { }
        if (!values.amount) {
            errors.amount = MESSAGES['REQUIRED_MESSAGE'];
        } else if (!values.to) {
            errors.to = MESSAGES['REQUIRED_MESSAGE'];
        } else if (!walletIsValid) {
            errors.to = MESSAGES['INVALID_WALLET_ADDRESS'];
        } else if (values.amount <= 0 || values.amount > balance) {
            errors.amount = MESSAGES['AMOUNT_INVALID'] + balance + '.';
        }
        return errors;
    }

    const handleSubmitForm = (values: CreateWithdrawRequestModel) => {
        dispatch(createWithdrawRequest(values))
    }

    return <>
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
    </>
}
export default CreateWithdrawRequestForm;