import { get } from "lodash";
import { useEffect, useState } from "react";
import { OverlayTrigger, Tab, Table, Tabs, Tooltip } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import CommissionTransactions from "../../../components/transactions/commission";
import DepositTransactions from "../../../components/transactions/deposit";
import StakeTransactions from "../../../components/transactions/stake";
import TeamRewardHistory from "../../../components/transactions/team-reward";
import WithdrawalTransactions from "../../../components/transactions/withdrawal";
import { ROUTES } from "../../../constants";
import { getDepositTransactionsRequest, getWithdrawalTransactionsRequest } from "../../../redux/actions/dashboardActions";
import { GET_LIST_COMMISSION_REQUEST, GET_LIST_STAKE_REQUEST, GET_TEAM_REWARD_REQUEST } from "../../../redux/types/withdraw";

const HBDashboardTransactions = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        getDepositTransactions();
    }, []);

    const getDepositTransactions = () => {
        dispatch(getDepositTransactionsRequest())
    }
    const getWithdrawalTransactions = () => {
        dispatch(getWithdrawalTransactionsRequest())
    }
    const getStakeTransactions = () => {
        dispatch({ type: GET_LIST_STAKE_REQUEST })
    }
    const getCommissionTransactions = () => {
        dispatch({ type: GET_LIST_COMMISSION_REQUEST })
    }
    const getTeamRewardHistory = () => {
        dispatch({ type: GET_TEAM_REWARD_REQUEST })
    }

    const handleTabChange = (e: any) => {
        switch (e) {
            case 'Deposit': {
                getDepositTransactions();
                break;
            }
            case 'Withdrawal': {
                getWithdrawalTransactions();
                break;
            }
            case 'Commission': {
                getCommissionTransactions();
                break;
            }
            case 'Stake': {
                getStakeTransactions();
                break;
            }
            case 'TeamReward': {
                getTeamRewardHistory();
                break;
            }
        }
    }

    return <div className="hb-dashboard-transaction">
        <div className="hb-dashboard-transaction-heading">
            <span>TRANSACTION</span>
            <span onClick={() => navigate(ROUTES.TRANSACTIONS)} className="hb-view-more">View more</span>
        </div>
        <Tabs
            defaultActiveKey="Deposit"
            id="TransactionTabs"
            className="hb-tabs"
            onSelect={handleTabChange}
        >
            <Tab eventKey="Deposit" title="Deposit">
                <DepositTransactions isDashboard={true} />
            </Tab>
            <Tab eventKey="Withdrawal" title="Withdrawal">
                <WithdrawalTransactions isDashboard={true} />
            </Tab>
            <Tab eventKey="Commission" title="Commission">
                <CommissionTransactions isDashboard={true} />
            </Tab>
            <Tab eventKey="Stake" title="Stake">
                <StakeTransactions isDashboard={true} />
            </Tab>
            <Tab eventKey="TeamReward" title="Team Reward">
                <TeamRewardHistory isDashboard={true} />
            </Tab>
        </Tabs>
    </div>
}
export default HBDashboardTransactions