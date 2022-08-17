import { useEffect, useState } from "react";
import { Button, Form, FormControl, FormGroup, FormLabel, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';
import { useActiveWeb3React } from "../../hook";
import { UseApprovePoolContract } from "../../hook/useApprovePoolContract";
import { UsePoolDeposit } from "../../hook/usePoolContract";
import { depositRequest } from "../../redux/actions/depositActions";
import { getDepositLoadingSelector, getDepositSuccessSelector } from "../../redux/selectors/depositSelectors";
import PasswordControl from "../password-control";

interface DepositModalProps {
    onHide: (isSubmit?: boolean) => void
}
const DepositModal = ({ onHide }: DepositModalProps) => {

    const dispatch = useDispatch();

    const { account, library, chainId } = useActiveWeb3React();

    const [amount, setAmount] = useState<number>(0);
    const [referralId, setReferralId] = useState<string>('');
    const loading = useSelector(getDepositLoadingSelector);
    const success = useSelector(getDepositSuccessSelector);

    useEffect(() => {
        if (success) {
            toast.success('Deposit Successfully!');
            onHide(true);
        }
    }, [success]);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        UseApprovePoolContract({ web3Provider: library?.provider, account: account }, (approveResult: any) => {
            console.log('approveResult', approveResult);
        });
        // UsePoolDeposit({ ref: '', amount: 10 * 10 ** 10, web3Provider: library?.provider, account }, (res: any) => {
        //     console.log('sssssss', res);
        // })
    }

    return <Modal className="hb-modal" size="sm" centered show onHide={onHide}>
        <Modal.Header closeButton>
            <Modal.Title>Deposit</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <Form onSubmit={handleSubmit}>
                <FormGroup className="mb-3">
                    <FormLabel>Deposit amount</FormLabel>
                    <div className="hb-form-control-wrap">
                        <FormControl required value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
                        <span>DOT</span>
                    </div>
                </FormGroup>

                <FormGroup className="mb-3">
                    <FormLabel>Referral ID (Optional)</FormLabel>
                    <FormControl value={referralId} onChange={(e: any) => setReferralId(e.target.value)} />
                </FormGroup>

                <Button type="submit" disabled={loading}>
                    <span>Confirm</span>
                </Button>
            </Form>
        </Modal.Body>
    </Modal>
}
export default DepositModal;