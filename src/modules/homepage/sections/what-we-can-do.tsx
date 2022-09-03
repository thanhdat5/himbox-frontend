import { Container, Row, Col } from "react-bootstrap";
import Section from "../components/section";

const PublicWhatWeCanDo = () => {
    const WE_CAN = [
        { image: '/images/actions/stake-dot.png', text: 'DOT' },
        { image: '/images/actions/him.png', text: 'HIM' },
        { image: '/images/actions/game.png', text: 'Play Game' },
        { image: '/images/actions/trading.png', text: 'Trading' },
        { image: '/images/actions/nft.png', text: 'Open NFT Box' },
        { image: '/images/actions/liquidity-providers.png', text: 'Liquidity Providers' },
        { image: '/images/actions/contribute.png', text: 'Contribute' }
    ];

    return <Section className="hb-we-can" id="WhatWeCanDo">
        <Container>
            <h2 data-aos="fade-up" className="hb-section-title mb-5">WHAT WE CAN DO ON HIMBOX?</h2>
            <Row className="gx-xl-5">
                {
                    WE_CAN.map((_item: any, idx: number) => {
                        return <Col lg="4" md="6" key={idx}>
                            <div data-aos="fade-up" data-aos-delay={(idx % 3) * 100} className="hb-we-can-card">
                                <div className="hb-we-can-card-image">
                                    <img src={_item.image} alt={_item.text} />
                                </div>
                                <h3 className="hb-we-can-card-text">{_item.text}</h3>
                            </div>
                        </Col>
                    })
                }
            </Row>
        </Container>
    </Section>
}
export default PublicWhatWeCanDo