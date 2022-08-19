import { ReactElement } from "react";
import { Row, Col } from "react-bootstrap";

interface HBStatisticCardProps {
    label: string;
    value: any;
    subValue?: string;
    value2?: string;
    subValue2?: string;
    className?: string;
    action?: ReactElement;
    multiple?: boolean;
}
const HBStatisticCard = ({ label, value, subValue, value2, subValue2, action, className, multiple = false }: HBStatisticCardProps) => {
    return <div className={`hb-statistic-card ${className || ''}`}>
        <div className="hb-statistic-card-label">{label}</div>
        {
            multiple ? <Row>
                <Col xs={5}>
                    <div className="hb-statistic-card-value d-flex flex-column">
                        <b>{value}</b>
                        <span className="d-block">{subValue || ''}</span>
                    </div>
                </Col>
                <Col xs={7}>
                    <div className="hb-statistic-card-value d-flex flex-column">
                        <b>{value2}</b>
                        <span className="d-block">{subValue2 || ''}</span>
                    </div>
                </Col>
            </Row> : <div className="hb-statistic-card-value">
                <b>{value}</b>
                <span>{subValue || ''}</span>
            </div>
        }

        {action}
    </div>
}
export default HBStatisticCard