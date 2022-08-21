import { get } from "lodash";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GET_TEAM_REWARD_REQUEST } from "../../redux/types/withdraw";
import { formatNumberDownRound } from "../../utils/helpers";
import { formatWalletAddress, getStatus } from "../../utils/utils";
import { NETWORK_SCAN } from "../../_config";

interface TeamRewardProps {
    isDashboard?: boolean
}

const TeamRewardHistory = ({ isDashboard = false }: TeamRewardProps) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const teamRewardHistory = useSelector(state => get(state, 'withdraw.teamReward.list', []));
    console.log('teamRewardHistory', teamRewardHistory);

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
                            <th>From</th>
                            <th>Amount (DOT)</th>
                            <th>TxHash</th>
                            <th style={{ width: 180 }}>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (isDashboard ? teamRewardHistory.slice(0, 10) : teamRewardHistory).map((item: any, idx: number) => {
                                return <tr key={idx + item?._id}>
                                    <td>{idx + 1}</td>
                                    {/* <td>
                                        <span style={{ cursor: 'pointer' }} onClick={() => handleNavigate(item?.from, 'address')}>{formatWalletAddress(item?.from, 20)}</span>
                                    </td> */}
                                    {/* <td>{typeof (get(item, 'amount.dot', undefined)) !== 'undefined' ? formatNumberDownRound(get(item, 'amount.dot', 0)) : formatNumberDownRound(get(item, 'amount', 0))}</td> */}
                                    {/* <td>
                                        <span style={{ cursor: 'pointer' }} onClick={() => handleNavigate(get(item, 'transaction.tx_hash', ''))}>{formatWalletAddress(get(item, 'transaction.tx_hash', ''), 26)}</span>
                                    </td> */}
                                    <td>{new Date(item?.time).toLocaleDateString()} {new Date(item?.time).toLocaleTimeString()}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </Table>
        }
    </>
}
export default TeamRewardHistory