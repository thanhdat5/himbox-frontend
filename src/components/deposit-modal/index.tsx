import BigNumber from 'bignumber.js';
import { Button, Form, FormControl, FormGroup, FormLabel, Modal } from "react-bootstrap";
import { useDotBalance } from "../../state/wallet/hook";
import { formatNumberDownRound } from "../../utils/helpers";
import { DOT_DECIMALS } from "../../_config";

interface DepositModalProps {
    onHide: (isSubmit?: boolean) => void,
    handleSubmit: any,
    amount: any,
    setAmount: any,
}
const DepositModal = ({ onHide, handleSubmit, amount, setAmount }: DepositModalProps) => {
    const dotBal = useDotBalance();

    return <Modal className="hb-modal" size="sm" backdrop="static" centered show onHide={onHide}>
        <Modal.Header closeButton>
            <Modal.Title>Deposit</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <Form onSubmit={handleSubmit}>
                <FormGroup className="mb-3">
                    <FormLabel>Deposit amount</FormLabel>
                    <div className="hb-form-control-wrap">
                        <FormControl type='number' required value={amount} onChange={(e) => setAmount(e.target.value)} />
                        <span>DOT</span>
                    </div>
                    <Form.Text className="text-error">{`Max: ${formatNumberDownRound(BigNumber(dotBal).dividedBy(10 ** DOT_DECIMALS))}`}</Form.Text>
                </FormGroup>

                <Button
                    disabled={!(parseFloat(amount) > 0 && (BigNumber(dotBal).dividedBy(10 ** DOT_DECIMALS)).gte(BigNumber(amount)))}
                    type="submit">
                    <span>Confirm</span>
                </Button>
            </Form>
        </Modal.Body>
    </Modal>
}
export default DepositModal;