import { get } from "lodash";
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants";
import { resetWithdrawState } from "../../redux/actions/withdrawActions";
import ConfirmWithdraw from "./confirm";
import CreateWithdrawRequestForm from "./create";

interface WithdrawModalProps {
    currentStep?: number;
    withdraw_id?: string;
    onHide: (isSubmit?: boolean) => void
}
const WithdrawModal = ({ onHide, currentStep = 1, withdraw_id = '' }: WithdrawModalProps) => {
    const dispatch = useDispatch();
    const withdrawRequest = useSelector(state => get(state, 'withdraw.withdrawRequest', null));
    const confirmSuccess = useSelector(state => get(state, 'withdraw.confirmSuccess', false));
    const [step, setStep] = useState<number>(currentStep);
    const [withdrawId, setWithdrawId] = useState<any>(withdraw_id);
    const navigate = useNavigate();

    useEffect(() => {
        if (withdrawRequest) {
            setStep(2);
            setWithdrawId(withdrawRequest._id);
            dispatch(resetWithdrawState());
        }
    }, [withdrawRequest])


    // Confirm Withdraw Request
    useEffect(() => {
        if (confirmSuccess) {
            dispatch(resetWithdrawState());
            onHide(true);
            navigate(ROUTES.TRANSACTIONS);
        }
    }, [confirmSuccess]);

    const handleOnHide = () => {
        onHide(false);
        if (step === 2) {
            navigate(ROUTES.TRANSACTIONS);
        }
    }

    return <Modal size="sm" className="hb-modal" backdrop="static" centered show onHide={handleOnHide}>
        <Modal.Header closeButton>
            <Modal.Title>{step === 1 ? 'Create Withdraw Request' : 'Confirm Withdraw Request'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {
                step === 1 ? <CreateWithdrawRequestForm /> : <ConfirmWithdraw withdraw_id={withdrawId} />
            }
        </Modal.Body>
    </Modal>
}
export default WithdrawModal;