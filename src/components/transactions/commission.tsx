import { get } from "lodash";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PACKAGE_NAME_TYPES } from "../../constants";
import { GET_LIST_COMMISSION_REQUEST } from "../../redux/types/withdraw";
import { NETWORK_SCAN } from "../../_config";

interface CommissionTransactionsProps {
    isDashboard?: boolean
}

const CommissionTransactions = ({ isDashboard = false }: CommissionTransactionsProps) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const commissionTransactions = useSelector(state => get(state, 'withdraw.commissionTransactions.list', []));

    useEffect(() => {
        dispatch({ type: GET_LIST_COMMISSION_REQUEST });
    }, [])

    const handleNavigate = (txID: string, type = 'tx') => {
        window.open(`${NETWORK_SCAN}/${type}/${txID}`);
    }

    return <>
        {
            !commissionTransactions || commissionTransactions.length <= 0 ?
                <div className="no-data">No transaction</div>
                :
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
                            (isDashboard ? commissionTransactions.slice(0, 10) : commissionTransactions).map((item: any, idx: number) => {
                                return <tr key={idx + item?._id}>
                                    <td>{idx + 1}</td>
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
        }
    </>
}
export default CommissionTransactions