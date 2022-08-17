import { useState } from "react";
import BigNumber from 'bignumber.js';
import DepositModal from "../components/deposit-modal";
import HBHeader from "../components/header";
import HBSidebar from "../components/sidebar";
import WithdrawModal from "../components/withdraw-modal";
import { useActiveWeb3React } from "../hook";
import { getAllowanceToken } from "../hook/useAllowance";
import { UseApprovePoolContract } from "../hook/useApprovePoolContract";
import { UsePoolDeposit } from "../hook/usePoolContract";
import { DOT_ADDRESS } from "../_config";
import { MAX_UINT } from "../literals";
import { ACTION_STATUS } from "../constants";
import { useDispatch } from "react-redux";
import { getDashboardStatisticsRequest } from "../redux/actions/dashboardActions";
import ProcessingModal from "../components/processing-modal";
import { useSelector } from "react-redux";
import { get } from "lodash";
import { ShowErrorMessage } from "../services/appService";

const PrivateLayout = ({ children }: any) => {

  const dispatch = useDispatch();

  const refId = useSelector(state => get(state, 'dashboard.statistics[0].ref_id', null));

  const [showSidebar, setShowSidebar] = useState(false);
  const [showDeposit, setShowDeposit] = useState(false);
  const [showWithdraw, setShowWithdraw] = useState(false);

  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(0);
  const [hash, setHash] = useState<any>('');
  const [approving, setApproving] = useState(false);
  const [error, setError] = useState('');

  const [amount, setAmount] = useState<any>(0);

  const { account, library } = useActiveWeb3React();

  const handleCloseDeposit = (isSubmit?: boolean) => {
    if (isSubmit) {
      console.log('Deposit success!');
    }
    setShowDeposit(false);
  }

  const handleCloseWithdraw = (isSubmit?: boolean) => {
    if (isSubmit) {
      console.log('Withdrawal success!');
    }
    setShowWithdraw(false);
  }

  const handelDepositInternal = () => {
    UsePoolDeposit({ ref: refId, amount: Number(amount) * 10 ** 10, web3Provider: library?.provider, account }, (result: any) => {
      console.log('result 1 ==>>', result);
      if (result.status === ACTION_STATUS.DEPOSIT_PACKAGE_SUCCESS) {
        setHash(result?.txID);
        setTimeout(() => {
          setLoading(1);
          dispatch(getDashboardStatisticsRequest({}));
        }, 30000);
      }
      if (result.status === ACTION_STATUS.DEPOSIT_PACKAGE_FAIL) {
        // console.log('enter package fail', result?.message);
        setLoading(-1);
        // console.log('11111111111', result?.message);
        setError(result?.message);
      }
    })
  }

  const handleSubmitDeposit = async (e: any) => {
    e.preventDefault();
    if (refId) {
      await setShowDeposit(false);
      await setVisible(true);
      setLoading(0);
      setApproving(true);
      const allowance = await getAllowanceToken({ web3Provider: library, currencyAddress: DOT_ADDRESS, account });
      const bigAllowance = new BigNumber(allowance);
      if (bigAllowance.gte(new BigNumber(Number(amount) * 10 ** 10))) {
        setApproving(false);
        handelDepositInternal();
      } else {
        setApproving(true);
        UseApprovePoolContract({ web3Provider: library?.provider, account: account }, (approveResult: any) => {
          console.log('approveResult', approveResult);
          if (approveResult.status === ACTION_STATUS.APPROVED) {
            setApproving(false);
            handelDepositInternal();
          }
          if (approveResult.status === ACTION_STATUS.APPROVE_FAILS) {
            setVisible(false);
            setApproving(false);
            return;
          }
        });
      }
      // setApproving(true);
      // UseApprovePoolContract({ web3Provider: library?.provider, account: account }, (approveResult: any) => {
      //   console.log('approveResult', approveResult);
      //   if (approveResult.status === ACTION_STATUS.APPROVED) {
      //     setApproving(false);
      //     handelDepositInternal();
      //   }
      //   if (approveResult.status === ACTION_STATUS.APPROVE_FAILS) {
      //     setVisible(false);
      //     setApproving(false);
      //     return;
      //   }
      // });
    } else {
      ShowErrorMessage('Oops! Please logout and try again');
    }
  }

  return (
    <>
      <HBHeader onDeposit={() => {
        setShowDeposit(true);
        setAmount('');
      }} onWithdraw={() => setShowWithdraw(true)} onSidebarToggle={() => setShowSidebar(true)} />
      <main>
        <HBSidebar show={showSidebar} onSidebarToggle={() => setShowSidebar(false)} />
        <div className="hb-content">
          {children}
        </div>
      </main>
      {showDeposit ? <DepositModal
        onHide={handleCloseDeposit}
        handleSubmit={handleSubmitDeposit}
        amount={amount}
        setAmount={setAmount}
      /> : <></>}
      {showWithdraw ? <WithdrawModal onHide={handleCloseWithdraw} /> : <></>}
      <ProcessingModal
        visible={visible}
        setVisible={setVisible}
        onCancel={() => {
          setVisible(false);
          setHash(null);
          setLoading(0);
          setApproving(false);
        }}
        error={error}
        loading={loading}
        approving={approving}
        hash={hash}
      />
    </>
  );
}

export default PrivateLayout;
