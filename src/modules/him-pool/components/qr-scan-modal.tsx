import { Image, Modal } from "react-bootstrap";

const QRScanModal = ({ path, code, onDismiss }: any) => {
    return <Modal centered show size="sm" className="hb-modal" onHide={onDismiss}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
            <Image style={{ borderRadius: 16 }} className="w-100" src={path} alt={code} />
        </Modal.Body>
    </Modal>
}
export default QRScanModal;