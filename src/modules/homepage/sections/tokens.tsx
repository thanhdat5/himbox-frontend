import { Container } from "react-bootstrap"
import Section from "../components/section"
import TokenCard from "../components/token"

const PublicTokens = () => {
    return <Section className="hb-tokens" id="Tokens">
        <Container>
            <div className="hb-tokens-list">
                <TokenCard href="https://polkadot.network/" image="/images/tokens/s-polkadot.png" />
                <TokenCard href="https://kusama.network/" image="/images/tokens/s-kusama.png" />
                <TokenCard href="https://moonbeam.network/" image="/images/tokens/s-moonbeam.png" />
                <TokenCard href="https://acala.network/" image="/images/tokens/s-acala.png" />
                <TokenCard href="https://about.fb.com/news/2020/05/welcome-to-novi/" image="/images/tokens/s-novi.png" />
                <TokenCard href="https://subwallet.app/" image="/images/tokens/s-subwallet.png" />
                <TokenCard href="https://www.dotmarketcap.com/" image="/images/tokens/s-dotmarket.png" />
            </div>
        </Container>
    </Section>
}
export default PublicTokens