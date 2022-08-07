import { Button, Col, Form, FormControl, FormGroup, Image, Modal, Row } from "react-bootstrap";

interface ParticipateModalProps {
    onHide: (isSubmit?: boolean) => void
}
const ParticipateModal = ({ onHide }: ParticipateModalProps) => {
    const handleSubmit = (e: any) => {
        e.preventDefault();
        onHide(true);
    }

    return <Modal className="hb-modal" size="sm" centered show onHide={onHide}>
        <Modal.Header closeButton>
            <Modal.Title>Confirm Participate</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <Form onSubmit={handleSubmit}>
                <div className="form-note mb-4">
                    <ul>
                        <li>The QR code is generated only once and will not be duplicated, corresponding to the
                            number of DOTs and the wallet address receiving the cryptocurrency.</li>
                        <li>If users wish to change their choice of investment, they must cancel the current
                            investment first. The system will then provide a new QR code and another address to the
                            users.</li>
                        <li>The system allows trading of DOT tokens on the BSC or Polkadot network. Choose the right
                            network for successful trading.</li>
                        <li>1 DOT = 87.50 HIM</li>
                    </ul>
                </div>

                <Row>
                    <Col md={6} className="mb-4 mb-md-0">
                        <Image style={{ borderRadius: 16 }} className="w-100"
                            src="https://camo.githubusercontent.com/5c0e557ce429b13dfd71ef0c05124eda691129db9c7ca21787790a488ab5030d/68747470733a2f2f656e64726f69642e6e6c2f71722d636f64652f64656661756c742f4c6966652532306973253230746f6f25323073686f7274253230746f253230626525323067656e65726174696e672532305152253230636f646573"
                            alt="" />
                        <div className="text-center pt-2 mb-3">
                            <small><i>Scan QR code to make payment</i></small>
                        </div>
                        <FormGroup>
                            <div className="hb-form-control-wrap">
                                <FormControl readOnly required value="13Me1...m4Z4r" />
                                <span style={{ cursor: 'pointer' }}>
                                    <svg width="24px" height="24px" viewBox="0 0 24 24" id="magicoon-Regular"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g id="copy-Regular">
                                            <path id="copy-Regular-2" fill="currentColor"
                                                d="M21.237,6.177,17.823,2.763a1.736,1.736,0,0,0-1.237-.513H11A3.754,3.754,0,0,0,7.25,6v.25H6A3.754,3.754,0,0,0,2.25,10v8A3.754,3.754,0,0,0,6,21.75h7A3.754,3.754,0,0,0,16.75,18v-.25H18A3.754,3.754,0,0,0,21.75,14V7.414A1.736,1.736,0,0,0,21.237,6.177ZM17.75,4.811,19.189,6.25h-.377A1.064,1.064,0,0,1,17.75,5.188ZM15.25,18A2.252,2.252,0,0,1,13,20.25H6A2.252,2.252,0,0,1,3.75,18V10A2.252,2.252,0,0,1,6,7.75H7.25V14A3.754,3.754,0,0,0,11,17.75h4.25ZM18,16.25H11A2.252,2.252,0,0,1,8.75,14V6A2.252,2.252,0,0,1,11,3.75h5.25V5.188A2.565,2.565,0,0,0,18.812,7.75H20.25V14A2.252,2.252,0,0,1,18,16.25Z">
                                            </path>
                                        </g>
                                    </svg>
                                </span>
                            </div>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <div className="h-100 d-flex flex-column justify-content-between">
                            <div className="mb-4 mb-md-0">
                                <div className="hb-package-item-line">
                                    <div className="hb-package-item-label">Platform</div>
                                    <div className="hb-package-item-value">
                                        <b>Polkadot</b>
                                    </div>
                                </div>
                                <div className="hb-package-item-line">
                                    <div className="hb-package-item-label">Profit</div>
                                    <div className="hb-package-item-value">
                                        <b>0.05%/day</b>
                                    </div>
                                </div>
                                <div className="hb-package-item-line">
                                    <div className="hb-package-item-label">Package 1</div>
                                    <div className="hb-package-item-value">
                                        <b>5 DOT</b>
                                    </div>
                                </div>
                                <div className="hb-package-item-line">
                                    <div className="hb-package-item-label">Plan 1</div>
                                    <div className="hb-package-item-value">
                                        <b>Lock 0 HIM</b>
                                        <span>= 0.00 DOT</span>
                                    </div>
                                </div>
                                <div className="hb-package-item-line hb-package-item-price">
                                    <div className="hb-package-item-label">Total</div>
                                    <div className="hb-package-item-value">
                                        <b>5 DOT</b>
                                        <span>= 43.30 $</span>
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