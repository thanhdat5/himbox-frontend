import { Button } from "react-bootstrap";
import { formatNumberDownRound } from "../../utils/helpers";

interface HBPackageCardProps {
    packageName: string;
    packageValue: any;
    planName: string;
    planValue: string;
    planValueDOT: any;
    total: string;
    totalUSD: any;
    disabled?: boolean;
    current?: boolean;
    onParticipate: () => void;
}
const HBPackageCard = ({ packageName, packageValue, planName, planValue, planValueDOT, total, totalUSD, disabled = false, current = false, onParticipate }: HBPackageCardProps) => {
    return <div className={`hb-package-item ${disabled ? 'disabled' : ''}`}>
        <div className="hb-package-item-line">
            <div className="hb-package-item-label">{packageName}</div>
            <div className="hb-package-item-value">
                <b>{packageValue} DOT</b>
            </div>
        </div>
        <div className="hb-package-item-line">
            <div className="hb-package-item-label">{planName}</div>
            <div className="hb-package-item-value">
                <b>{planValue}</b>
                <span>= {formatNumberDownRound(planValueDOT)} DOT</span>
            </div>
        </div>
        <div className="hb-package-item-line hb-package-item-price">
            <div className="hb-package-item-label">Total</div>
            <div className="hb-package-item-value">
                <b>{formatNumberDownRound(total)} DOT</b>
                <span>= {formatNumberDownRound(totalUSD)} $</span>
            </div>
        </div>
        <div className="hb-package-item-action">
            <Button disabled={disabled} type="button" className={`${current ? 'current' : ''} w-100`} onClick={() => disabled ? null : onParticipate()}>
                <span>{current ? 'Current' : 'Participate'}</span>
            </Button>
        </div>
    </div>
}
export default HBPackageCard;