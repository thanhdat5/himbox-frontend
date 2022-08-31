import { Container, Row, Col, Image } from "react-bootstrap"
import Section from "../components/section"

const PublicBanner = () => {
    return <Section className="hb-banner" id="Home">
        <Container>
            <Row className="align-items-center justify-content-lg-between">
                <Col lg="5" className="order-lg-1 order-2">
                    <h1 data-aos="fade-up"><strong>HIMBOX</strong><br />
                        <span className="text-nowrap">A DECENTRALIZED</span> FINANCE PLATFORM ON POLKADOT
                    </h1>
                    <p data-aos="fade-up" className="mb-5">Gateway to the Polkadot Ecosystem</p>
                    <a data-aos="fade-up" href="#" className="btn btn-primary">Stake DOT</a>
                </Col>
                <Col lg="7" className="order-lg-2 order-1">
                    <Image data-aos="fade-up" data-aos-delay="200" className="w-100 hb-banner-image"
                        src="https://thumb.tildacdn.com/tild3562-3663-4262-b766-373065613664/-/resize/748x/-/format/webp/Group_124166.png"
                        alt="" />
                </Col>
            </Row>
        </Container>
    </Section>
}
export default PublicBanner