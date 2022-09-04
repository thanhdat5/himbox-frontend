import { get } from "lodash";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ENDPOINTS } from "../../../constants";
import { apiCall } from "../../../redux/saga/api";
import HBNetworkMembers from "./members";

const HBNetworkLevels = () => {
    const myRef = useSelector(state => get(state, 'dashboard.statistics[0].ref_id', ''));
    const [data, setData] = useState<any>({});
    const [selectedChild, setSelectedChild] = useState<any>({});
    const [childPackage, setChildPackage] = useState([]);

    useEffect(() => {
        if (myRef) {
            getChildByFth(1, myRef);
        }
    }, [myRef]);

    const getChildByFth = async (level: any, ref: any) => {
        try {
            const res = await apiCall('GET', ENDPOINTS.GET_CHILD, { child_ref: ref });
            let temp = { ...data, [level]: res.data.data };
            let temp2 = { ...selectedChild, [level - 1]: ref };
            let temp3: any = [];
            for (let i = level + 1; i <= 20; i++) {
                temp[i] = [];
            }
            for (let i = level; i <= 20; i++) {
                temp2[i] = '';
            }
            for (let i = 0; i < res.data.data.length; i++) {
                temp3.push({ ...res.data?.data[i]?.package, user_id: res.data?.data[i]?.ref_id, sponsor: ref, rank: res.data?.data[i]?.rank });
            }
            setData(temp);
            setSelectedChild(temp2);
            setChildPackage(temp3);
        } catch (error) {

        }
    }

    return <>
        <div className="hb-network-levels-wrap mb-3 mb-md-4">
            <div className="hb-network-levels">
                {Object.keys(data).map((key: any, index: number) => {
                    return (
                        <div key={'f' + index} className="hb-network-level">
                            <div className="hb-network-level-heading">
                                <span>Level {index + 1}</span>
                                <b>{data[key].length}</b>
                            </div>
                            <div className="hb-network-level-members">
                                <ul>
                                    {data[key].map((row: any, idx: number) => {
                                        return <li
                                            className={selectedChild[index + 1] === row?.ref_id ? 'active' : ''}
                                            onClick={() => {
                                                getChildByFth(index + 2, row?.ref_id);
                                            }}
                                            key={row?.ref_id}
                                        >
                                            <span>
                                                {row?.ref_id}
                                            </span>
                                            <i>&gt;</i>
                                        </li>
                                    })}
                                    {/* <li className="active"><span>ouJd0vI9</span></li> */}
                                </ul>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
        <HBNetworkMembers
            data={childPackage}
        />
    </>
}
export default HBNetworkLevels