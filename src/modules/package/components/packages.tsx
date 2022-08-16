import { get } from "lodash";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import HBCard from "../../../components/card";
import HBPackageCard from "../../../components/package-card";
import ParticipateModal from "../../../components/participate-modal";
import { PackageByProfitResponseModel } from "../../../models";
import { getPackagesByProfitRequest } from "../../../redux/actions/packageActions";
import { getCurrentUserId } from "../../../services/appService";
import { convertNumber } from "../../../utils/helpers";

const HBPackageList = () => {

    const dispatch = useDispatch();

    const packages = useSelector(state => get(state, 'package.packages', []));
    const prices = useSelector(state => get(state, 'package.price', {}));

    const [profit, setProfit] = useState(0.05);
    const [selectedPackage, setSelectedPackage] = useState(null);

    useEffect(() => {
        if (profit) {
            getPackagesByProfit(profit)
        }
    }, [profit])

    const getPackagesByProfit = (profitValue: number) => {
        dispatch(getPackagesByProfitRequest(profitValue * 100))
    }

    const [showParticipate, setShowParticipate] = useState(false);

    const handleCloseParticipate = (isSubmit?: boolean) => {
        setSelectedPackage(null);
        setShowParticipate(false);
    }

    return <>
        <HBCard>
            <div className="hb-package-note mb-4">
                <p className="mb-lg-4">We provide investors with diverse and suitable investment packages. Users
                    only need to make a
                    decision on which investment package to invest in.<br />Users can also consider holding
                    HimBOX, as it
                    is estimated that the value of HimBOX can increase by 1000%.</p>
                <p>Select level of profit you'd like to receive. <span className="hb-badge">Daily reward (%)</span>
                </p>
            </div>
            <div className="hb-package-items mb-4">
                <button type="button" onClick={() => setProfit(0.05)} className={`hb-package-percent ${profit === 0.05 ? 'active' : ''}`}>0.05</button>
                <button type="button" onClick={() => setProfit(0.1)} className={`hb-package-percent ${profit === 0.1 ? 'active' : ''}`}>0.1</button>
                <button type="button" onClick={() => setProfit(0.15)} className={`hb-package-percent ${profit === 0.15 ? 'active' : ''}`}>0.15</button>
                <button type="button" onClick={() => setProfit(0.2)} className={`hb-package-percent ${profit === 0.2 ? 'active' : ''}`}>0.2</button>
                <button type="button" onClick={() => setProfit(0.25)} className={`hb-package-percent ${profit === 0.25 ? 'active' : ''}`}>0.25</button>
                <button type="button" onClick={() => setProfit(0.3)} className={`hb-package-percent ${profit === 0.3 ? 'active' : ''}`}>0.3</button>
                <button type="button" onClick={() => setProfit(0.35)} className={`hb-package-percent ${profit === 0.35 ? 'active' : ''}`}>0.35</button>
                <button type="button" onClick={() => setProfit(0.4)} className={`hb-package-percent ${profit === 0.4 ? 'active' : ''}`}>0.4</button>
            </div>
            <div className="hb-packages-list">
                {packages.length > 0 ?
                    <Row>
                        {
                            packages.map((item: any, idx: number) => {
                                return <Col key={idx} xl={3} lg={4} md={6} className="mb-md-4 mb-3">
                                    <HBPackageCard
                                        packageName={`Package ${idx + 1}`}
                                        packageValue={item.dot_amount}
                                        planName={`Plan ${item.plan}`}
                                        planValue={`Lock ${item.him_amount} HIM`}
                                        planValueDOT={item.him_amount / (get(prices, 'dot_price', 1) / get(prices, 'him_price', 1))}
                                        total={item.dot_amount + item.him_amount / (get(prices, 'dot_price', 1) / get(prices, 'him_price', 1))}
                                        totalUSD={(item.dot_amount + item.him_amount / (get(prices, 'dot_price', 1) / get(prices, 'him_price', 1))) * get(prices, 'dot_price', 0)}
                                        onParticipate={() => {
                                            setSelectedPackage({ ...item, name: `Package ${idx + 1}` });
                                            setShowParticipate(true);
                                        }}
                                        disabled={item.disabled}
                                    />
                                </Col>
                            })
                        }
                    </Row>
                    :
                    <span>No packages available</span>
                }

            </div>
            <div>
                <small>* (1 DOT = {convertNumber(get(prices, 'dot_price', 0) / get(prices, 'him_price', 1))} HIM)</small>
            </div>
        </HBCard>

        {showParticipate ? <ParticipateModal selectedPackage={selectedPackage} onHide={handleCloseParticipate} /> : <></>}
    </>
}
export default HBPackageList