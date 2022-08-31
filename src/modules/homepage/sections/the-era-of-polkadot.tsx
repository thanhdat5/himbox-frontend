import { Button, Col, Container, Image, Row } from "react-bootstrap"
import Section from "../components/section"

const PublicTheEraOfPolkadot = () => {
    const EXCHANGES = [
        { logo: '/images/exchange/w-binance.png', link: '#' },
        { logo: '/images/exchange/w-coinbase.png', link: '#' },
        { logo: '/images/exchange/w-ftx.png', link: '#' },
        { logo: '/images/exchange/w-kraken.png', link: '#' },
        { logo: '/images/exchange/w-kucoin.png', link: '#' },
        { logo: '/images/exchange/w-bitfinex.png', link: '#' },
        { logo: '/images/exchange/w-huobi.png', link: '#' },
        { logo: '/images/exchange/w-bybit.png', link: '#' },
    ]
    return <Section className="hb-polkadot" id="TheEraOfPolkadot">
        <Container>
            <Row className="justify-content-center mb-5">
                <Col lg="8">
                    <h2 data-aos="fade-up" className="hb-section-title">THE ERA OF POLKADOT</h2>
                    <div data-aos="fade-up" className="hb-section-description">
                        Polkadot unites and secures a growing ecosystem of specialized blockchains called
                        parachains. Apps and services on Polkadot can securely communicate across chains, forming
                        the basis for a truly interoperable decentralized web.
                    </div>
                    <div data-aos="fade-up" data-aos-delay="100" className="mb-4">
                        <Image src="/images/buy-dot.png" alt="BuyDOT" className="w-100 hb-polkadot-image" />
                    </div>
                    <div data-aos="fade-up" data-aos-delay="200" className="hb-section-action">
                        <Button type="button" variant="primary" href="#" className="px-5">
                            <span>BUY DOT</span>
                        </Button>
                    </div>
                </Col>
            </Row>
            <div className="hb-exchanges">
                <Row>
                    {
                        EXCHANGES.map((item: any, idx: number) => {
                            return <Col xl="3" lg="4" xs="6" key={idx}>
                                <div data-aos="fade-up" className="hb-exchange">
                                    <Image src={item.logo} alt="" />
                                    <a data-aos="fade-up" href={item.link} className={`btn btn-primary ${idx !== 0 ? 'btn-default' : ''} w-100 mt-3`} target="_blank" rel="noreferrer">
                                        Buy Now
                                    </a>
                                </div>
                            </Col>
                        })
                    }
                </Row>
            </div>
        </Container>
    </Section>
}
export default PublicTheEraOfPolkadot