import { Col, Row } from "react-bootstrap"
import HBCard from "../../components/card"
import HBPageWrap from "../../components/page-wrap"
import HBSectionTitle from "../../components/sectrion-title"
import HBNetworkAffiliate from "./components/affiliate"
import HBNetworkLevels from "./components/levels"
import HBNetworkMembers from "./components/members"
import HBNetworkSharing from "./components/sharing"
import HBNetworkStatistics from "./components/statistics"

const Network = () => {
    return <HBPageWrap className="hb-network" title="My Networks">
        <HBNetworkStatistics />
        <Row>
            <Col xl={9} className="pe-xl-5 mb-4 mb-xl-0 order-xl-1 order-2">
                <HBSectionTitle className="mb-2" title="MEMBERS" />
                <HBCard className="py-3 hb-network-member-card d-flex flex-column">
                    <div className="h-100 d-flex flex-column" style={{ flex: 1 }}>
                        <HBNetworkLevels />
                        <HBNetworkMembers />
                    </div>
                </HBCard>
            </Col>
            <Col xl={3} className="order-xl-2 order-1 mb-xl-0 mb-3 mb-md-4">
                <div className="hb-network-sharing">
                    <Row>
                        <Col xl={12} lg={6} className="mb-3 mb-md-4">
                            <HBNetworkAffiliate />
                        </Col>
                        <Col xl={12} lg={6}>
                            <HBNetworkSharing />
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    </HBPageWrap>
}
export default Network