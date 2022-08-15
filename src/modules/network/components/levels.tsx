import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NetworkMembersByLevelResponseModel } from "../../../models";
import { getMembersByLevelRequest } from "../../../redux/actions/networkActions";

const HBNetworkLevels = () => {
    const dispatch = useDispatch();
    const [statistics, setStatistics] = useState<NetworkMembersByLevelResponseModel[]>([]);
    const [level, setLevel] = useState(0);
    // Todo
    useEffect(() => {
        if (level) {
            dispatch(getMembersByLevelRequest({ level }))
        }
    }, [level])

    return <div className="hb-network-levels-wrap mb-3 mb-md-4">
        <div className="hb-network-levels">
            <div className="hb-network-level">
                <div className="hb-network-level-heading">
                    <span>Level 1</span>
                    <b>2</b>
                </div>
                <div className="hb-network-level-members">
                    <ul>
                        <li className="active"><span>FhDmfntL</span><i>&gt;</i></li>
                        <li><span>ouJd0vI9</span></li>
                    </ul>
                </div>
            </div>
            <div className="hb-network-level">
                <div className="hb-network-level-heading">
                    <span>Level 2</span>
                    <b>3</b>
                </div>
                <div className="hb-network-level-members">
                    <ul>
                        <li className="active"><span>QCscHzjO</span><i>&gt;</i></li>
                        <li><span>Fozl9RRu</span><i>&gt;</i></li>
                        <li><span>GjybZkv1</span></li>
                    </ul>
                </div>
            </div>
            <div className="hb-network-level">
                <div className="hb-network-level-heading">
                    <span>Level 3</span>
                    <b>1</b>
                </div>
                <div className="hb-network-level-members">
                    <ul>
                        <li className="active"><span>GVyav7XQ</span><i>&gt;</i></li>
                    </ul>
                </div>
            </div>
            <div className="hb-network-level">
                <div className="hb-network-level-heading">
                    <span>Level 4</span>
                    <b>4</b>
                </div>
                <div className="hb-network-level-members">
                    <ul>
                        <li><span>ctcFcz0W</span></li>
                        <li><span>FahOg7Is</span></li>
                        <li className="active"><span>jSVYIm7F</span><i>&gt;</i></li>
                        <li><span>ctcFcz0W</span></li>
                    </ul>
                </div>
            </div>
            <div className="hb-network-level">
                <div className="hb-network-level-heading">
                    <span>Level 5</span>
                    <b>2</b>
                </div>
                <div className="hb-network-level-members">
                    <ul>
                        <li className="active"><span>tTGiKyh1</span><i>&gt;</i></li>
                        <li><span>B2Yh0Jn7</span></li>
                    </ul>
                </div>
            </div>
            <div className="hb-network-level">
                <div className="hb-network-level-heading">
                    <span>Level 6</span>
                    <b>1</b>
                </div>
                <div className="hb-network-level-members">
                    <ul>
                        <li><span>ixwvW0ev</span><i>&gt;</i></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
}
export default HBNetworkLevels