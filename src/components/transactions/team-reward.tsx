import { Pagination } from 'antd';
import { get } from "lodash";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NUMBER_PER_PAGE } from "../../constants";
import { GET_TEAM_REWARD_REQUEST } from "../../redux/types/withdraw";
import { formatNumberDownRound } from "../../utils/helpers";

interface TeamRewardProps {
    isDashboard?: boolean
}

const TeamRewardHistory = ({ isDashboard = false }: TeamRewardProps) => {
    const dispatch = useDispatch();
    const [current, setCurrent] = useState(1);
    const teamRewardHistory = useSelector(state => get(state, 'withdraw.teamReward.list', []));

    useEffect(() => {
        dispatch({ type: GET_TEAM_REWARD_REQUEST });
    }, [])

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
                            (isDashboard ?
                                teamRewardHistory.slice(0, 10)
                                :
                                teamRewardHistory.slice((current - 1) * NUMBER_PER_PAGE, current * NUMBER_PER_PAGE)
                            ).map((item: any, idx: number) => {
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