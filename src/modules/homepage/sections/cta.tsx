import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import HBCard from "../../../components/card";
import { HIMBOX_ACCESS_TOKEN, ROUTES } from "../../../constants";
import Section from "../components/section";

const PublicCTA = () => {
    const logged = localStorage.getItem(HIMBOX_ACCESS_TOKEN);
    return <Section className="hb-create-an-account" id="CTA">
        <Container>
            <HBCard>
                <Row className="align-items-center justify-content-center">
                    <Col xs="12" md="5" className="text-center">
                        <img data-aos="fade-up" data-aos-delay="100" src="/images/cta_thumb.png" className="img-fluid" alt="" />
                    </Col>
                    <Col xs="12" md="6" className="mt-4 mt-md-0">
                        <h2 data-aos="fade-up" className="text-white mb-4">STARTS WITH US</h2>
                        <p data-aos="fade-up" data-aos-delay="100" className="mb-4">HIMBOX is a new DEFI project on the Polkadot ecosystem that can help users
                            get more DOT than ever before in a safe way and unstake anytime.</p>
                        {
                            logged ?
                                <Link data-aos="fade-up" data-aos-delay="200" className="btn btn-primary px-5" to={ROUTES.DASHBOARD}>
                                    <span>Go to Dashboard</span>
                                </Link> :
                                <Link data-aos="fade-up" data-aos-delay="200" className="btn btn-primary px-5" to={ROUTES.SIGN_UP}>
                                    <span>Create an account</span>
                                </Link>
                        }
                    </Col>
                </Row>
            </HBCard>
        </Container>
    </Section>
}
export default PublicCTA