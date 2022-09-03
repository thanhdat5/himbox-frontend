import { get } from "lodash";
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import CreateWithdrawRequestForm from "./create";

interface LockDotModalProps {
    visible?: boolean;
    onHide: (isSubmit?: boolean) => void
}
const LockDotModal = ({ onHide, visible }: LockDotModalProps) => {
    
    const dispatch = useDispatch();

    const handleOnHide = () => {
        onHide(false);
    }

    return <Modal size="sm" className="hb-modal" backdrop="static" centered show={visible} onHide={handleOnHide}>
        <Modal.Header closeButton>
            <Modal.Title>{'Lock DOT'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <CreateWithdrawRequestForm />
        </Modal.Body>
    </Modal>
}
export default LockDotModal;