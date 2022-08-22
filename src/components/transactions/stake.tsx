import { get } from "lodash";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Pagination } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { NUMBER_PER_PAGE, PACKAGE_ACTION_TYPES, PACKAGE_NAME_TYPES } from "../../constants";
import { GET_LIST_STAKE_REQUEST } from "../../redux/types/withdraw";
import { formatNumberDownRound } from "../../utils/helpers";
import { formatWalletAddress, getStatus } from "../../utils/utils";
import { NETWORK_SCAN } from "../../_config";

interface StakeTransactionsProps {
    isDashboard?: boolean
}

const StakeTransactions = ({ isDashboard = false }: StakeTransactionsProps) => {

    const dispatch = useDispatch();

    const stakeTransactions = useSelector(state => get(state, 'withdraw.stakeTransactions.list', []));
    // console.log('stakeTransactions', stakeTransactions);
    const [current, setCurrent] = useState(1);

    useEffect(() => {
        dispatch({ type: GET_LIST_STAKE_REQUEST });
    }, [])

    const handleNavigate = (txID: string, type = 'tx') => {
        window.open(`${NETWORK_SCAN}/${type}/${txID}`);
    }

    return <>
        {
            !stakeTransactions || stakeTransactions.length <= 0 ?
                <div className="no-data">No transaction</div>
                :
                <Table responsive>
                    <thead>
                        <tr>
                            <th style={{ width: 50 }}>No.</th>
                            <th>Dot Locked</th>
                            <th>Him Locked</th>
                            <th>Type</th>
                            <th>From</th>
                            <th>To</th>
                            <th style={{ width: 180 }}>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (isDashboard ? stakeTransactions.slice(0, 10) : stakeTransactions).map((item: any, idx: number) => {
                                return <tr key={idx + item?._id}>
                                    <td>{(current - 1) * NUMBER_PER_PAGE + idx + 1}</td>
                                    <td>{formatNumberDownRound(get(item, 'amount_locked.dot', 0))}</td>
                                    <td>{formatNumberDownRound(get(item, 'amount_locked.him', 0))}</td>
                                    <td>{PACKAGE_ACTION_TYPES[item?.type]}</td>
                                    <td>Package {PACKAGE_NAME_TYPES[get(item, 'package_from.profit', '')]}</td>
                                    <td>Package {PACKAGE_NAME_TYPES[get(item, 'package_to.profit', '')]}</td>
                                    <td>{new Date(item?.time).toLocaleDateString()} {new Date(item?.time).toLocaleTimeString()}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </Table>
        }
        {!isDashboard && <Pagination
            current={current}
            total={stakeTransactions.length}
            pageSize={NUMBER_PER_PAGE}
            showSizeChanger={false}
            onChange={(page: any, pageSize: any) => setCurrent(page)}
        />}
    </>
}
export default StakeTransactions