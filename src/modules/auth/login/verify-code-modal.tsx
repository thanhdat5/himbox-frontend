import { useState } from "react";
import { Form, FormGroup, FormLabel, FormControl, Button, Modal } from "react-bootstrap";

const VeryfyCodeModal = ({ onDismiss }: any) => {
    const [token, setToken] = useState<string>('');
    const handleSubmit = () => {
        onDismiss(token);
    }
    return <Modal centered show size="sm" className="hb-modal" onHide={onDismiss} backdrop="static">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
            <Form onSubmit={handleSubmit}>
                <FormGroup className="mb-4">
                    <FormLabel>Verification code</FormLabel>
                    <FormControl required value={token} onChange={(e) => setToken(e.target.value)} />
                </FormGroup>

                <Button type="submit"><span>Confirm</span></Button>
            </Form>
        </Modal.Body>
    </Modal >
}
export default VeryfyCodeModal;