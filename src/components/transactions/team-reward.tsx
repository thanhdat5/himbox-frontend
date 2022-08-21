import { get } from "lodash";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Pagination } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GET_TEAM_REWARD_REQUEST } from "../../redux/types/withdraw";
import { formatNumberDownRound } from "../../utils/helpers";
import { formatWalletAddress, getStatus } from "../../utils/utils";
import { NETWORK_SCAN } from "../../_config";
import { NUMBER_PER_PAGE } from "../../constants";

interface TeamRewardProps {
    isDashboard?: boolean
}

const TeamRewardHistory = ({ isDashboard = false }: TeamRewardProps) => {
    const dispatch = useDispatch();

    const [current, setCurrent] = useState(1);

    const teamRewardHistory = useSelector(state => get(state, 'withdraw.teamReward.list', []));
    // console.log('teamRewardHistory', teamRewardHistory);

    useEffect(() => {
        dispatch({ type: GET_TEAM_REWARD_REQUEST });
    }, [])

    const handleNavigate = (txID: string, type = 'tx') => {
        window.open(`${NETWORK_SCAN}/${type}/${txID}`);
    }

    return <>
        {
            !teamRewardHistory || teamRewardHistory.length <= 0 ?
                <div className="no-data">No transaction</div>
                :
                <Table responsive>
                    <thead>
                        <tr>
                            <th style={{ width: 50 }}>No.</th>
                            <th style={{ width: 240 }}>Amount (DOT)</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (isDashboard ? teamRewardHistory.slice(0, 10) : teamRewardHistory).map((item: any, idx: number) => {
                                return <tr key={idx + item?._id}>
                                    <td>{(current - 1) * NUMBER_PER_PAGE + idx + 1}</td>
                                    <td>{formatNumberDownRound(get(item, 'dot_amount', '0'))}</td>
                                    <td>{new Date(item?.time).toLocaleDateString()} {new Date(item?.time).toLocaleTimeString()}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </Table>
        }
        {!isDashboard && <Pagination
            current={current}
            total={teamRewardHistory.length}
            pageSize={NUMBER_PER_PAGE}
            showSizeChanger={false}
            onChange={(page: any, pageSize: any) => setCurrent(page)}
        />}
    </>
}
export default TeamRewardHistory