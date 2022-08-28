import { ErrorMessage, Form, Formik, Field } from "formik";
import { useEffect, useRef, useState } from "react";
import { Button, FormGroup, FormLabel, FormControl } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import HBCard from "../../../components/card";
import BigNumber from 'bignumber.js';
import { ACTION_STATUS, MESSAGES } from "../../../constants";
import { useUsdtBalance } from "../../../state/wallet/hook";
import { formatNumberDownRound, validatePwd } from "../../../utils/helpers";
import { UseApprovePoolHIMContract, UseBuyHim } from "../../../hook/useHimContract";
import { useActiveWeb3React } from "../../../hook";
import { getAllowanceHIMToken, getAllowanceToken } from "../../../hook/useAllowance";
import { USDT_ADDRESS } from "../../../_config";
import ProcessingModal from "../../../components/processing-modal";
import { get } from "lodash";
import { GET_HIM_SALE_CONFIGS_REQUEST, GET_HIM_SALE_INFO_REQUEST, GET_HIM_SALE_USER_INFO_REQUEST } from "../../../redux/types/himPool";

const HBHimPurchase = () => {

    const dispatch = useDispatch();
    const { account, library, chainId } = useActiveWeb3React();

    const formRef = useRef<any>(null);

    const usdtBal = useUsdtBalance();
    const himSaleInfo = useSelector(state => get(state, 'himPool.himSaleInfo', null));

    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(0);
    const [hash, setHash] = useState('');
    const [approving, setApproving] = useState(false);
    const [error, setError] = useState('');

    const handleValidateForm = (values: any) => {
        const errors: any = {};
        if (!values.amount || values.amount < Number(get(himSaleInfo, '8', 10 ** 6)) / 10 ** 6) {
            errors.amount = `${Number(get(himSaleInfo, '8', 10 ** 6)) / 10 ** 6} <= amount <= ${formatNumberDownRound(usdtBal / 10 ** 6)}`;
        }
        return errors;
    }

    const handleBuyHIMInternal = async (amount: any, ref: any) => {
        UseBuyHim({ web3Provider: library?.provider, amount: Number(amount) * 10 ** 6, ref, account }, async (result: any) => {
            console.log('result 1 ==>>', result);
            if (result.status === ACTION_STATUS.BUY_HIM_SUCCESS) {
                setHash(result?.txID);
                formRef.current.setValues({ amount: '', ref: '' });
                setTimeout(() => {
                    setLoading(1);
                    dispatch({ type: GET_HIM_SALE_CONFIGS_REQUEST, data: { library, account } });
                    dispatch({ type: GET_HIM_SALE_INFO_REQUEST, data: { library, account } });
                    if (account) {
                        dispatch({ type: GET_HIM_SALE_USER_INFO_REQUEST, data: { library, account } });
                    }
                }, 3000);
            }
            if (result.status === ACTION_STATUS.BUY_HIM_FAIL) {
                setLoading(-1);
                // setError(result?.message);
            }
        })
    }

    const handleBuyHIM = async (values: any) => {
        await setVisible(true);
        setLoading(0);
        setApproving(true);
        const allowance = await getAllowanceHIMToken({ web3Provider: library, currencyAddress: USDT_ADDRESS, account });
        const bigAllowance = new BigNumber(allowance);
        if (bigAllowance.gte(new BigNumber(Number(values?.amount) * 10 ** 6))) {
            setApproving(false);
            handleBuyHIMInternal(values?.amount, values?.ref);
        } else {
            setApproving(true);
            UseApprovePoolHIMContract({ web3Provider: library?.provider, account: account }, (approveResult: any) => {
                console.log('approveResult', approveResult);
                if (approveResult.status === ACTION_STATUS.APPROVED) {
                    setApproving(false);
                    handleBuyHIMInternal(values?.amount, values?.ref);
                }
                if (approveResult.status === ACTION_STATUS.APPROVE_FAILS) {
                    setVisible(false);
                    setApproving(false);
                    return;
                }
            });
        }
    }

    return <HBCard className="mb-md-4 mb-3 h-100-md-4-3">
        <Formik
            innerRef={formRef}
            enableReinitialize
            initialValues={{ balance: formatNumberDownRound(usdtBal) }}
            validate={handleValidateForm}
            onSubmit={handleBuyHIM}
        >
            <Form>
                <FormGroup className="mb-3">
                    <FormLabel>Your USDT balance</FormLabel>
                    {/* <FormControl readOnly type='text' value={formatNumberDownRound(usdtBal)} className="txtbalance" /> */}
                    <div className="hb-form-control-wrap">
                        <FormControl readOnly type='text' value={formatNumberDownRound(usdtBal / 10 ** 6)} className="txtbalance" />
                        <span>USDT</span>
                    </div>
                    <div className="form-description">Price: <b>1 HIM</b> = <b>{Number(get(himSaleInfo, '7', 0)) / 10 ** 2} USDT</b></div>
                </FormGroup>

                <FormGroup className="mb-3">
                    <FormLabel>Amount</FormLabel>
                    <div className="hb-form-control-wrap">
                        <Field type='number' id="amount" name="amount" className="form-control" />
                        <span>USDT</span>
                    </div>
                    {/* <div className="form-description">= <b>{Number(formRef?.current?.values?.amount)} HIM</b></div> */}
                    <ErrorMessage component='div' className="form-error" name="amount" />
                </FormGroup>

                <FormGroup className="mb-4">
                    <FormLabel>Referral ID (Optional)</FormLabel>
                    <div className="hb-form-control-wrap">
                        <Field type='text' id="ref" name="ref" className="form-control" />
                    </div>
                </FormGroup>

                <Button type="submit" disabled={!(account && usdtBal / 10 ** 6 > 0)}>
                    <span>Purchase</span>
                </Button>

                {/* <div className="form-note mb-0 mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque eaque, provident reiciendis...
                </div> */}
            </Form>
        </Formik>
        <ProcessingModal
            action="Buying"
            visible={visible}
            hash={hash}
            loading={loading}
            approving={approving}
            error={error}
            onCancel={() => {
                setHash('');
                setLoading(0);
                setApproving(false);
                setVisible(false);
            }}
        />
    </HBCard>
}
export default HBHimPurchase