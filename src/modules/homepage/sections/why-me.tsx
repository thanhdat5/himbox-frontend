import { Container, Row, Col, Image } from "react-bootstrap"
import HBCard from "../../../components/card"
import Section from "../components/section"

const WhyChooseHimbox = () => {
    return <Section className="hb-why-channel" id="WhyHimBOX">
        <Container>
            <HBCard className="px-5 py-4">
                <h2 data-aos="fade-up" className="hb-section-title mb-2">WHY CHOOSE HIMBOX?</h2>
                <div data-aos="fade-up" data-aos-delay="100" className="hb-section-description mb-5">
                    <ul>
                        <li>An essential component of the Polkadot ecosystem.</li>
                        <li>The all-in-one platform makes it simple for users to participate in the cryptocurrency market.</li>
                        <li>Staking DOT with a high APY.</li>
                        <li>Optimizing earnings using the Smart AMM protocol.</li>
                        <li>Token HIMBOX's growth potential is correlated with the expansion of the DOT ecosystem and its user base.</li>
                    </ul>
                </div>
                <div className="hb-why-channel-image">
                    <Image data-aos="fade-up" data-aos-delay="100" src="/images/why-me.gif" alt="" />
                </div>
            </HBCard>
        </Container>
    </Section>
}
export default WhyChooseHimbox