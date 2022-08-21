import { get } from "lodash";
import { useEffect, useState } from "react";
import { Tab, Tabs, Table, OverlayTrigger, Tooltip } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import HBPageWrap from "../../components/page-wrap";
import CommissionTransactions from "../../components/transactions/commission";
import DepositTransactions from "../../components/transactions/deposit";
import LeadershipHistory from "../../components/transactions/leadership-hsitory";
import StakeTransactions from "../../components/transactions/stake";
import TeamRewardHistory from "../../components/transactions/team-reward";
import WithdrawalTransactions from "../../components/transactions/withdrawal";
import { getDepositTransactionsRequest } from "../../redux/actions/dashboardActions";
import { getListWithdrawRequest } from "../../redux/actions/withdrawActions";
import { GET_LEADERSHIP_HISTORY_REQUEST, GET_LIST_COMMISSION_REQUEST, GET_LIST_STAKE_REQUEST, GET_TEAM_REWARD_REQUEST } from "../../redux/types/withdraw";
import { formatNumberDownRound } from "../../utils/helpers";
import { formatWalletAddress } from "../../utils/utils";
import { NETWORK_SCAN } from "../../_config";

const Transactions = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        getDepositTransactions();
    }, []);

    const getDepositTransactions = () => {
        dispatch(getDepositTransactionsRequest())
    }
    const getWithdrawalTransactions = () => {
        dispatch(getListWithdrawRequest());
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
    const getLeadershipHistory = () => {
        dispatch({ type: GET_LEADERSHIP_HISTORY_REQUEST })
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
            case 'Leadership': {
                getLeadershipHistory();
                break;
            }
        }
    }

    return <HBPageWrap className="hb-package" title="Transactions">
        <Tabs
            defaultActiveKey="Deposit"
            id="TransactionTabs"
            className="hb-tabs"
            onSelect={handleTabChange}
        >
            <Tab eventKey="Deposit" title="Deposit">
                <DepositTransactions />
            </Tab>
            <Tab eventKey="Withdrawal" title="Withdrawal">
                <WithdrawalTransactions />
            </Tab>
            <Tab eventKey="Commission" title="Commission">
                <CommissionTransactions />
            </Tab>
            <Tab eventKey="Stake" title="Stake">
                <StakeTransactions />
            </Tab>
            <Tab eventKey="TeamReward" title="Team Reward">
                <TeamRewardHistory />
            </Tab>
            <Tab eventKey="Leadership" title="Leadership History">
                <LeadershipHistory />
            </Tab>
        </Tabs>
    </HBPageWrap>
}
export default Transactions