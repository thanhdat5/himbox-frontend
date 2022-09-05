import { Pagination } from 'antd';
import { get } from "lodash";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NUMBER_PER_PAGE, PACKAGE_NAME_TYPES } from "../../constants";
import { GET_LIST_COMMISSION_REQUEST } from "../../redux/types/withdraw";

interface CommissionTransactionsProps {
    isDashboard?: boolean
}

const CommissionTransactions = ({ isDashboard = false }: CommissionTransactionsProps) => {

    const dispatch = useDispatch();

    const commissionTransactions = useSelector(state => get(state, 'withdraw.commissionTransactions.list', []));

    const [current, setCurrent] = useState(1);

    useEffect(() => {
        dispatch({ type: GET_LIST_COMMISSION_REQUEST });
    }, [])

    return <>
        {
            !commissionTransactions || commissionTransactions.length <= 0 ?
                <div className="no-data">No transaction</div>
                :
                <>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th style={{ width: 50 }}>No.</th>
                                <th>Package</th>
                                <th>Interest (DOT / day)</th>
                                <th style={{ width: 220 }}>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                (isDashboard ?
                                    commissionTransactions.slice(0, 10)
                                    :
                                    commissionTransactions.slice((current - 1) * NUMBER_PER_PAGE, current * NUMBER_PER_PAGE)
                                )
                                    .map((item: any, idx: number) => {
                                        return <tr key={idx + item?._id}>
                                            <td>{(current - 1) * NUMBER_PER_PAGE + idx + 1}</td>
                                            <td>
                                                <span>Package {PACKAGE_NAME_TYPES[item?.package_invest?.profit]}</span>
                                            </td>
                                            <td>{item?.dot_amount}</td>
                                            <td>{new Date(item?.time).toLocaleDateString()} {new Date(item?.time).toLocaleTimeString()}</td>
                                        </tr>
                                    })
                            }
                        </tbody>
                    </Table>

                    {!isDashboard && <Pagination
                        current={current}
                        total={commissionTransactions.length}
                        pageSize={NUMBER_PER_PAGE}
                        showSizeChanger={false}
                        onChange={(page: any, pageSize: any) => setCurrent(page)}
                    />}
                </>
        }
    </>
}
export default CommissionTransactions