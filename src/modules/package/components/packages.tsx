import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import HBCard from "../../../components/card";
import HBPackageCard from "../../../components/package-card";
import ParticipateModal from "../../../components/participate-modal";
import { getPackagesByProfitRequest } from "../../../redux/actions/packageActions";

const HBPackageList = () => {
    const dispatch = useDispatch();
    const PACKAGES = [
        { id: 1, packageName: 'Package 1', packageValue: '5', planName: 'Plan 1', planValue: 'Lock 0 HIM', planValueDOT: '0.00', total: '5', totalUSD: '43.30' },
        { id: 2, packageName: 'Package 2', packageValue: '5', planName: 'Plan 1', planValue: 'Lock 0 HIM', planValueDOT: '0.00', total: '5', totalUSD: '43.30' },
        { id: 3, packageName: 'Package 3', packageValue: '5', planName: 'Plan 1', planValue: 'Lock 0 HIM', planValueDOT: '0.00', total: '5', totalUSD: '43.30', disabled: true }
    ]
    // const [packages, setPackages] = useState<PackageByProfitResponseModel[]>(PACKAGES);
    const [packages, setPackages] = useState<any[]>(PACKAGES);
    // Todo
    const [profit, setProfit] = useState(0.05);

    useEffect(() => {
        if (profit) {
            getPackagesByProfit(profit)
        }
    }, [profit])

    const getPackagesByProfit = (profitValue: number) => {
        dispatch(getPackagesByProfitRequest({ profit: profitValue }))
    }
    const [showParticipate, setShowParticipate] = useState(false);

    const handleCloseParticipate = (isSubmit?: boolean) => {
        if (isSubmit) {
            console.log('Participate success!');
        }
        setShowParticipate(false);
    }

    return <>
        <HBCard>
            <div className="hb-package-note mb-4">
                <p className="mb-lg-4">We provide investors with diverse and suitable investment packages. Users
                    only need to make a
                    decision on which investment package to invest in.<br />Users can also consider holding
                    HIMBOX, as it
                    is estimated that the value of HIMBOX can increase by 1000%.</p>
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
                <button type="button" onClick={() => setProfit(0.45)} className={`hb-package-percent ${profit === 0.45 ? 'active' : ''}`}>0.45</button>
                <button type="button" onClick={() => setProfit(0.5)} className={`hb-package-percent ${profit === 0.5 ? 'active' : ''}`}>0.5</button>
                <button type="button" onClick={() => setProfit(0.55)} className={`hb-package-percent ${profit === 0.55 ? 'active' : ''}`}>0.55</button>
            </div>
            <div className="hb-packages-list">
                <Row>
                    {
                        packages.map((item: any, idx: number) => {
                            return <Col key={idx} xl={3} lg={4} md={6} className="mb-md-4 mb-3">
                                <HBPackageCard
                                    packageName={item.packageName}
                                    packageValue={item.packageValue}
                                    planName={item.planName}
                                    planValue={item.planValue}
                                    planValueDOT={item.planValueDOT}
                                    total={item.total}
                                    totalUSD={item.totalUSD}
                                    onParticipate={() => setShowParticipate(true)}
                                    disabled={item.disabled}
                                />
                            </Col>
                        })
                    }
                </Row>
            </div>
            <div>
                <small>* (1 DOT = 87.50 HIM)</small>
            </div>
        </HBCard>

        {showParticipate ? <ParticipateModal onHide={handleCloseParticipate} /> : <></>}
    </>
}
export default HBPackageList