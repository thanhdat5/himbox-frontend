import { useState } from "react";
import DepositModal from "../components/deposit-modal";
import HBHeader from "../components/header";
import HBSidebar from "../components/sidebar";
import WithdrawModal from "../components/withdraw-modal";

const PrivateLayout = ({ children }: any) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showDeposit, setShowDeposit] = useState(false);
  const [showWithdraw, setShowWithdraw] = useState(false);

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

  return (
    <>
      <HBHeader onDeposit={() => setShowDeposit(true)} onWithdraw={() => setShowWithdraw(true)} onSidebarToggle={() => setShowSidebar(true)} />
      <main>
        <HBSidebar show={showSidebar} onSidebarToggle={() => setShowSidebar(false)} />
        <div className="hb-content">
          {children}
        </div>
      </main>
      {showDeposit ? <DepositModal onHide={handleCloseDeposit} /> : <></>}
      {showWithdraw ? <WithdrawModal onHide={handleCloseWithdraw} /> : <></>}
    </>
  );
}

export default PrivateLayout;
