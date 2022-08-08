import { useEffect, useState } from "react";
import { Button, Form, FormControl, FormGroup, FormLabel, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getWithdrawErrorSelector, getWithdrawLoadingSelector, getWithdrawSuccessSelector } from "../../redux/selectors/withdrawSelectors";
import PasswordControl from "../password-control";
import { toast } from 'react-toastify';
import { withdrawRequest } from "../../redux/actions/withdrawActions";

interface WithdrawModalProps {
    onHide: (isSubmit?: boolean) => void
}
const WithdrawModal = ({ onHide }: WithdrawModalProps) => {
    const [amount, setAmount] = useState<number>(0);
    const [toAddress, setToAddress] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const dispatch = useDispatch();
    const loading = useSelector(getWithdrawLoadingSelector);
    const success = useSelector(getWithdrawSuccessSelector);
    const error = useSelector(getWithdrawErrorSelector);

    useEffect(() => {
        if (success) {
            toast.success('Withdrawal Successfully!');
            onHide(true);
        }
    }, [success]);

    useEffect(() => {
        if (error) {
            toast.error(error);
        }
    }, [error]);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const postData = { userId: '111', amount, toAddress, password };
        dispatch(withdrawRequest(postData))
    }

    return <Modal className="hb-modal" centered show onHide={onHide}>
        <Modal.Header closeButton>
            <Modal.Title>Withdraw</Modal.Title>
        </Modal.Header>

        <Modal.Body>
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
            <Form onSubmit={handleSubmit}>
                <FormGroup className="mb-3">
                    <FormLabel>Minimum amount</FormLabel>
                    <div className="hb-form-control-wrap">
                        <FormControl required type="number" value={amount} onChange={(e) => setAmount(e ? Number(e.target.value) : 0)} />
                        <span>DOT</span>
                    </div>
                </FormGroup>

                <FormGroup className="mb-3">
                    <FormLabel>Recipient wallet address</FormLabel>
                    <FormControl required placeholder="0x" value={toAddress} onChange={(e: any) => setToAddress(e.target.value)} />
                </FormGroup>

                <FormGroup className="mb-4">
                    <FormLabel>Verified password</FormLabel>
                    <PasswordControl value={password} onChange={(e: any) => setPassword(e.target.value)} required />
                </FormGroup>

                <Button type="submit" disabled={loading}>
                    <span>Confirm</span>
                </Button>
            </Form>
        </Modal.Body>
    </Modal>
}
export default WithdrawModal;