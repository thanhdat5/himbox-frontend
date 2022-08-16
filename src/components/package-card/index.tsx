import { Button } from "react-bootstrap";
import { formatCurrency } from "../../utils/helpers";

interface HBPackageCardProps {
    packageName: string;
    packageValue: string;
    planName: string;
    planValue: string;
    planValueDOT: any;
    total: string;
    totalUSD: any;
    disabled?: boolean;
    onParticipate: () => void;
}
const HBPackageCard = ({ packageName, packageValue, planName, planValue, planValueDOT, total, totalUSD, disabled = false, onParticipate }: HBPackageCardProps) => {
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
                <span>= {formatCurrency(planValueDOT)} DOT</span>
            </div>
        </div>
        <div className="hb-package-item-line hb-package-item-price">
            <div className="hb-package-item-label">Total</div>
            <div className="hb-package-item-value">
                <b>{formatCurrency(total)} DOT</b>
                <span>= {formatCurrency(totalUSD)} $</span>
            </div>
        </div>
        <div className="hb-package-item-action">
            <Button type="button" className="w-100" onClick={() => disabled ? null : onParticipate()}>
                <span>Participate</span>
            </Button>
        </div>
    </div>
}
export default HBPackageCard;