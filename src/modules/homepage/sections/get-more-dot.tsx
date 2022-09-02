import { Col, Container, Row } from "react-bootstrap"
import Section from "../components/section"

const PublicGetMoreDot = () => {
    return <Section className="hb-get-himbox" id="GetMoreDot">
    <Container>
        <Row className="justify-content-center mb-5">
            <Col lg="8">
                <h2 data-aos="fade-up" className="hb-section-title">HOW CAN I GET MORE DOT ON HIMBOX?</h2>
                <div data-aos="fade-up" data-aos-delay="100" className="hb-section-description">
                    5 easy steps to earn more DOT with HIMBOX
                </div>
            </Col>
        </Row>
        <div className="hb-section-body">
            <div className="hb-get-steps">
                <div className="hb-get-step">
                    <div data-aos="fade-up">
                        <span>Step 1</span>
                        <div>Create an account on HIMBOX</div>
                    </div>
                </div>
                <div className="hb-get-step">
                    <div data-aos="fade-up" data-aos-delay="100">
                        <span>Step 2</span>
                        <div>Buy DOT &amp; HIM</div>
                    </div>
                </div>
                <div className="hb-get-step">
                    <div data-aos="fade-up" data-aos-delay="200">
                        <span>Step 3</span>
                        <div>Deposit</div>
                    </div>
                </div>
                <div className="hb-get-step">
                    <div data-aos="fade-up" data-aos-delay="300">
                        <span>Step 4</span>
                        <div>Choose a plan that you want by APY</div>
                    </div>
                </div>
                <div className="hb-get-step active">
                    <div data-aos="fade-up" data-aos-delay="400">
                        <span>Step 5</span>
                        <div>Get reward token</div>
                    </div>
                </div>
            </div>
        </div>
    </Container>
</Section>
}
export default PublicGetMoreDot