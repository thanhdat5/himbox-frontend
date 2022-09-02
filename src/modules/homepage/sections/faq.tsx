import { Accordion, Col, Container, Image, Row } from "react-bootstrap";
import Section from "../components/section";

const PublicFaq = () => {
    return <Section className="hb-faq" id="FAQs">
        <Container>
            <Row className="align-items-center">
                <Col xl="6" md="12" className="pe-lg-5">
                    <h2 data-aos="fade-up" className="hb-section-title">HAVE ANY QUESTION?</h2>
                    <div data-aos="fade-up" data-aos-delay="100" className="hb-section-description">Below you'll find answers to the questions we get asked the
                        most about applying for HIMBOX.</div>
                    <div className="hb-section-body">
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0" data-aos="fade-up">
                                <Accordion.Header>What is HIMBOX?</Accordion.Header>
                                <Accordion.Body>HIMBOX is an All-in-one DEFI platform on Polkadot.</Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1" data-aos="fade-up" data-aos-delay="100">
                                <Accordion.Header>What is Polkadot?</Accordion.Header>
                                <Accordion.Body>Polkadot is a top 1 blockchain layer 1 in the cryptocurrency market. It was founded by Gavin Wood, the former Co-Founder and CTO of Ethereum and the creator of the Solidy programming language, which is now widely used in the Blockchain developer community.</Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2" data-aos="fade-up" data-aos-delay="200">
                                <Accordion.Header>Why I should choose HIMBOX?</Accordion.Header>
                                <Accordion.Body>HIMBOX is a new DEFI project on the Polkadot ecosystem that can help users get more DOT than ever before in a safe way and unstake anytime.</Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3" data-aos="fade-up" data-aos-delay="300">
                                <Accordion.Header>Can I unstake before the period?</Accordion.Header>
                                <Accordion.Body>Yes. You can unstake anytime.</Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4" data-aos="fade-up" data-aos-delay="400">
                                <Accordion.Header>I'm a beginner. Can I join to get profit?</Accordion.Header>
                                <Accordion.Body>Yes. HIMBOX will help you enter the cryptocurrency space in a simple way.</Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5" data-aos="fade-up" data-aos-delay="500">
                                <Accordion.Header>What should I do if I have a problem?</Accordion.Header>
                                <Accordion.Body>Please contact us via email:</Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </Col>
                <Col xl="6" md="12">
                    <div className="hb-faq-image">
                        <Image data-aos="fade-up" data-aos-delay="200" className="img-fluid"
                            src="/images/imgfaq.png" alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    </Section>
}
export default PublicFaq