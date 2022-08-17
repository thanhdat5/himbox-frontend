import { Button, Modal } from "react-bootstrap";

interface ConfirmModalProps {
    title?: string;
    message: string;
    buttonOK?: string;
    buttonCancel?: string;
    onDismiss?: any;
}
const ConfirmModal = ({ title, message, buttonOK = 'OK', buttonCancel = 'Cancel', onDismiss }: ConfirmModalProps) => {
    return <Modal size="sm" className="hb-modal" centered show onHide={onDismiss}>
        <Modal.Header closeButton>
            {title ? <Modal.Title>{title}</Modal.Title> : <></>}
        </Modal.Header>

        <Modal.Body className="text-center">
            <div className="mb-5">{message}</div>
            <div>
                <Button type="button" onClick={() => onDismiss(true)}><span>{buttonOK}</span></Button>
                <Button type="button" className="btn-default ms-2" onClick={onDismiss}><span>{buttonCancel}</span></Button>
            </div>
        </Modal.Body>
    </Modal>
}
export default ConfirmModal;