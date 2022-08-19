import { get } from "lodash";
import { Button, Col, Form, FormControl, FormGroup, Image, Modal, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ENDPOINTS, MESSAGES } from "../../constants";
import { getDashboardStatisticsRequest } from "../../redux/actions/dashboardActions";
import { apiCall } from "../../redux/saga/api";
import { ShowErrorMessage, ShowSuccessMessage } from "../../services/appService";
import { convertNumber, extractError, formatNumberDownRound } from "../../utils/helpers";

interface ParticipateModalProps {
    onHide: (isSubmit?: boolean) => void;
    selectedPackage?: any
}
const ParticipateModal = ({ onHide, selectedPackage }: ParticipateModalProps) => {

    const dispatch = useDispatch();

    const prices = useSelector(state => get(state, 'package.price', {}));

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const res = await apiCall("POST", ENDPOINTS.JOIN_PACKAGE, { to_package: selectedPackage?._id });
            dispatch(getDashboardStatisticsRequest({}))
            onHide(true);
            ShowSuccessMessage(MESSAGES.ENTER_PACKAGE_SUCCESS);
        } catch (error) {
            ShowErrorMessage({ msg: extractError(error) });
        }
    }

    return <Modal className="hb-modal" size="lg" centered show onHide={onHide} backdrop="static">
        <Modal.Header closeButton>
            <Modal.Title>Confirm Participate</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <Form onSubmit={handleSubmit}>
                <div className="form-note mb-4">
                    <ul>
                        <li>If users wish to change their choice of investment, they must cancel the current
                            investment first. The system will then provide a new QR code and another address to the
                            users.</li>
                        <li>The system allows trading of DOT tokens on the BSC or Polkadot network. Choose the right
                            network for successful trading.</li>
                        <li>1 DOT = {convertNumber(get(prices, 'dot_price', 0) / get(prices, 'him_price', 1))} HIM</li>
                    </ul>
                </div>

                <Row>
                    <Col md={12}>
                        <div className="h-100 d-flex flex-column justify-content-between">
                            <div className="mb-4 mb-md-0">
                                <Row>
                                    <Col md={6}>
                                        <div className="hb-package-item-line">
                                            <div className="hb-package-item-label">Platform</div>
                                            <div className="hb-package-item-value">
                                                <b>Polkadot</b>
                                            </div>
                                        </div>
                                        <div className="hb-package-item-line">
                                            <div className="hb-package-item-label">Profit</div>
                                            <div className="hb-package-item-value">
                                                <b>{get(selectedPackage, 'profit', 0)}%/day</b>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="hb-package-item-line">
                                            <div className="hb-package-item-label">{get(selectedPackage, 'name', '')}</div>
                                            <div className="hb-package-item-value">
                                                <b>{get(selectedPackage, 'dot_amount', 0)} DOT</b>
                                            </div>
                                        </div>
                                        <div className="hb-package-item-line">
                                            <div className="hb-package-item-label">Plan {get(selectedPackage, 'plan', 1)}</div>
                                            <div className="hb-package-item-value">
                                                <b>Lock {get(selectedPackage, 'him_amount', 0)} HIM</b>
                                                <span>= {formatNumberDownRound(selectedPackage.him_amount / (get(prices, 'dot_price', 1) / get(prices, 'him_price', 1)))} DOT</span>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>

                                <div className="hb-package-item-line hb-package-item-price">
                                    <div className="hb-package-item-label">Total</div>
                                    <div className="hb-package-item-value">
                                        <b>{formatNumberDownRound(selectedPackage.dot_amount + selectedPackage.him_amount / (get(prices, 'dot_price', 1) / get(prices, 'him_price', 1)))} DOT</b>
                                        <span>= {formatNumberDownRound((selectedPackage.dot_amount + selectedPackage.him_amount / (get(prices, 'dot_price', 1) / get(prices, 'him_price', 1))) * get(prices, 'dot_price', 0))} $</span>
                                    </div>
                                </div>
                            </div>
                            <Button type="submit" style={{ height: 50, borderRadius: 16 }} className="w-100 d-flex align-items-center py-0 justify-content-center">
                                <span>Confirm</span>
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Form>
        </Modal.Body>
    </Modal>
}
export default ParticipateModal;