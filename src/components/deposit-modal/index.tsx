import { useState } from "react";
import { Button, Form, FormControl, FormGroup, FormLabel, Modal } from "react-bootstrap";
import PasswordControl from "../password-control";

interface DepositModalProps {
    onHide: (isSubmit?: boolean) => void
}
const DepositModal = ({ onHide }: DepositModalProps) => {
    const [amount, setAmount] = useState<number | undefined>(undefined);
    const [referralId, setReferralId] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // const postData = { amount, referralId, password };
        onHide(true);
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
                        <FormControl required type="number" value={amount} onChange={(e) => setAmount(e ? Number(e.target.value) : undefined)} />
                        <span>DOT</span>
                    </div>
                </FormGroup>

                <FormGroup className="mb-3">
                    <FormLabel>Referral ID (Optional)</FormLabel>
                    <FormControl value={referralId} onChange={(e: any) => setReferralId(e.target.value)} />
                </FormGroup>

                <FormGroup className="mb-4">
                    <FormLabel>Verified password</FormLabel>
                    <PasswordControl value={password} onChange={(e: any) => setPassword(e.target.value)} required />
                </FormGroup>

                <Button type="submit">
                    <span>Confirm</span>
                </Button>
            </Form>
        </Modal.Body>
    </Modal>
}
export default DepositModal;