import PublicFooter from "./components/footer";
import PublicHeader from "./components/header";
import PublicScrollToTop from "./components/to-top";
import PublicBanner from "./sections/banner";
import PublicCTA from "./sections/cta";
import PublicFaq from "./sections/faq";
import PublicFeatures from "./sections/features";
import PublicGetMoreDot from "./sections/get-more-dot";
import PublicOmiChannel from "./sections/omi-channel";
import PublicTheEraOfPolkadot from "./sections/the-era-of-polkadot";
import PublicTokens from "./sections/tokens";
import PublicWhatIsHimBox from "./sections/what-is-himbox";
import PublicWhatWeCanDo from "./sections/what-we-can-do";

const Homepage = () => {
    return <>
        <PublicHeader />
        <main className="hb-main p-0 no-before">
            <PublicBanner />
            <PublicTokens />
            <PublicWhatIsHimBox />
            <PublicFeatures />
            <PublicWhatWeCanDo />
            <PublicTheEraOfPolkadot />
            <PublicGetMoreDot />
            <PublicOmiChannel />
            <PublicFaq />
            <PublicCTA />
        </main>
        <PublicFooter />
        <PublicScrollToTop />
    </>
}
export default Homepage