import { Container, Row, Col, Image, Button } from "react-bootstrap"
import Section from "../components/section"

const PublicWhatIsHimBox = () => {
    const handleLearnMore = () => {
        document.getElementById('Features')?.scrollIntoView();
    }
    return <Section className="hb-what-is-himbox" id="WhatIsHimBox">
        <Container>
            <Row className="gx-xl-5 align-items-center mb-5">
                <Col lg="6" className="mb-lg-0 mb-4">
                    <Image data-aos="fade-up" src="/images/banner2.gif" alt="" className="w-100" />
                </Col>
                <Col lg="6" className="pe-lg-5">
                    <h2 data-aos="fade-up" className="hb-section-title">WHAT IS HIMBOX?</h2>
                    <div data-aos="fade-up" data-aos-delay="100" className="hb-section-description">HIMBOX is a Dapp
                        layer 2 on Polkadot that provides liquidity
                        mining products, DOT optimization, and coins/tokens in the ecosystem. The aim is to build
                        HIMBOX to be an all-in-one DEFI platform on Polkadot, so we will provide services including
                        farming, staking, DEX, GameFi, NFT marketplace, asset management, and lending/borrowing.
                    </div>
                    <Button type="button" variant="primary" data-aos="fade-up" data-aos-delay="200" onClick={handleLearnMore}>Learn More</Button>
                </Col>
            </Row>
            <div className="hb-video-intro">
                <iframe style={{ width: '100%', border: '0', height: '100%' }} src="https://www.youtube.com/embed/lEpllxY3SFE" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
            </div>
        </Container>
    </Section>
}
export default PublicWhatIsHimBox