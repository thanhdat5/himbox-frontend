import { Container } from "react-bootstrap"
import Section from "../components/section"
import TokenCard from "../components/token"

const PublicTokens = () => {
    return <Section className="hb-tokens" id="Tokens">
        <Container>
            <div className="hb-tokens-list">
                <TokenCard image="/images/tokens/s-polkadot.png" />
                <TokenCard image="/images/tokens/s-kusama.png" />
                <TokenCard image="/images/tokens/s-moonbeam.png" />
                <TokenCard image="/images/tokens/s-acala.png" />
                <TokenCard image="/images/tokens/s-novi.png" />
                <TokenCard image="/images/tokens/s-subwallet.png" />
                <TokenCard image="/images/tokens/s-dotmarket.png" />
            </div>
        </Container>
    </Section>
}
export default PublicTokens