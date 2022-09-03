import { Container, Row, Col } from "react-bootstrap";
import Section from "../components/section";
import stakeDot from '../../../assets/images/actions/stake-dot.png';
import him from '../../../assets/images/actions/him.png';
import game from '../../../assets/images/actions/game.png';
import trading from '../../../assets/images/actions/trading.png';
import nft from '../../../assets/images/actions/nft.png';
import liquidity from '../../../assets/images/actions/liquidity-providers.png';
import contribute from '../../../assets/images/actions/contribute.png';

const PublicWhatWeCanDo = () => {
    const WE_CAN = [
        { image: stakeDot, text: 'DOT' },
        { image: him, text: 'HIM' },
        { image: game, text: 'Play Game' },
        { image: trading, text: 'Trading' },
        { image: nft, text: 'Open NFT Box' },
        { image: liquidity, text: 'Liquidity Providers' },
        { image: contribute, text: 'Contribute' }
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