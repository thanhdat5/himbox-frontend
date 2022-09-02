import { Button, Col, Container, Image, Row } from "react-bootstrap"
import Section from "../components/section"

const PublicTheEraOfPolkadot = () => {
    const EXCHANGES = [
        { logo: '/images/exchange/binance.png', link: 'https://www.binance.com/en', bg: '#323232' },
        { logo: '/images/exchange/metamask.png', link: 'https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn', bg: '#F7F7F7' },
        { logo: '/images/exchange/w-coinbase.png', link: 'https://www.coinbase.com/', bg: '#204EEC' },
        { logo: '/images/exchange/ftx.png', link: 'https://ftx.com/', bg: '#DFEAF4' },
        { logo: '/images/exchange/w-kraken.png', link: 'https://www.kraken.com/', bg: '#513FCB' },
        { logo: '/images/exchange/w-kucoin.png', link: 'https://www.kucoin.com/', bg: '#4DA68A' },
        { logo: '/images/exchange/w-bitfinex.png', link: 'https://www.bitfinex.com/', bg: '#1A2D3E' },
        { logo: '/images/exchange/huobi.png', link: 'https://www.huobi.com/en-us/', bg: '#F7F7F7' },
        { logo: '/images/exchange/w-bybit.png', link: 'https://www.bybit.com/', bg: '#151828' },
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
                        <Button type="button" variant="primary" href="https://www.binance.com/en/trade/DOT_USDT" target="_blank" className="px-5">
                            <span>BUY DOT</span>
                        </Button>
                    </div>
                </Col>
            </Row>
            <div className="hb-exchanges">
                <Row>
                    {
                        EXCHANGES.map((item: any, idx: number) => {
                            return <Col onClick={() => window.open(item?.link)} xl="3" lg="4" xs="6" key={idx}>
                                <div data-aos="fade-up" className="hb-exchange" style={{ backgroundColor: item?.bg }}>
                                    <Image src={item.logo} alt="" />
                                    {/* <a data-aos="fade-up" href={item.link} className={`btn btn-primary ${idx !== 0 ? 'btn-default' : ''} w-100 mt-3`} target="_blank" rel="noreferrer">
                                        Buy Now
                                    </a> */}
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