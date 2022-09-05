import { Pagination } from 'antd';
import { get } from "lodash";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NUMBER_PER_PAGE } from "../../constants";
import { GET_LIST_STAKE_REQUEST } from "../../redux/types/withdraw";
import { formatNumberDownRound } from "../../utils/helpers";

interface LeadershipHistoryProps {
    isDashboard?: boolean
}

const LeadershipHistory = ({ isDashboard = false }: LeadershipHistoryProps) => {

    const dispatch = useDispatch();

    const leadershipHis = useSelector(state => get(state, 'withdraw.leadershipHistory.list', []));

    const [current, setCurrent] = useState(1);

    useEffect(() => {
        dispatch({ type: GET_LIST_STAKE_REQUEST });
    }, [])

    return <>
        {
            !leadershipHis || leadershipHis.length <= 0 ?
                <div className="no-data">No transaction</div>
                :
                <>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th style={{ width: 50 }}>No.</th>
                                <th>Rank</th>
                                <th>Type</th>
                                <th>Reward (DOT)</th>
                                <th>Total Team Reward</th>
                                <th>Total Volume</th>
                                <th style={{ width: 180 }}>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                (isDashboard ?
                                    leadershipHis.slice(0, 10)
                                    :
                                    leadershipHis.slice((current - 1) * NUMBER_PER_PAGE, current * NUMBER_PER_PAGE)
                                )
                                    .map((item: any, idx: number) => {
                                        return <tr key={idx + item?._id}>
                                            <td>{(current - 1) * NUMBER_PER_PAGE + idx + 1}</td>
                                            <td>Rank {item?.rank}</td>
                                            <td>{item?.type}</td>
                                            <td>{formatNumberDownRound(item?.reward)}</td>
                                            <td>{formatNumberDownRound(item?.total_reward_team)}</td>
                                            <td>{formatNumberDownRound(item?.total_vol)}</td>
                                            <td>{new Date(item?.time).toLocaleDateString()} {new Date(item?.time).toLocaleTimeString()}</td>
                                        </tr>
                                    })
                            }
                        </tbody>
                    </Table>
                    {!isDashboard && <Pagination
                        current={current}
                        total={leadershipHis.length}
                        pageSize={NUMBER_PER_PAGE}
                        showSizeChanger={false}
                        onChange={(page: any, pageSize: any) => setCurrent(page)}
                    />}
                </>
        }
    </>
}
export default LeadershipHistory