import React from 'react';
import { connectorLocalStorageKey } from '../../literals';


import { Config, Login } from './types';

interface Props {
  walletConfig: Config;
  login: Login;
  onDismiss: () => void;
  className?:string;
}

function WalletCard({ login, walletConfig, onDismiss, className }: Props) {
  const { title, icon } = walletConfig;
  const handleCardClick = () => {
    login(walletConfig.connectorId);
    window.localStorage.setItem(connectorLocalStorageKey, walletConfig.connectorId);
    onDismiss();
  };

  return (
    <button type="button"
      onClick={handleCardClick}
      id={`wallet-connect-${title.toLocaleLowerCase()}`}
      className={`tq_btn tq_btn_outline tq_btn_outline_primary mx-auto my-3 py-3 px-4 ${className}`}
    >
      <span className="tq_btn_text"><img src={icon} width="30px" className="me-2" /> {title}</span>
      <div className="tq_btn_hover"></div>
    </button>
  );
}

export default WalletCard;
