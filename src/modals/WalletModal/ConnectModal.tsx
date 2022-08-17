import React from 'react';
import { Modal } from 'react-bootstrap';
import ReactPlaceholder from 'react-placeholder/lib';

import config from './config';
import { Login } from './types';
import WalletCard from './WalletCard';

interface Props {
  login: Login;
  onDismiss?: () => void;
}

function ConnectModal({ login, onDismiss = () => null }: Props) {
  const onHide = () => {
    onDismiss();
  };
  return (
    <React.Fragment>
      <Modal
        show={true}
        id="connectWalletModal"
        className="tq_modal"
        centered={true}
        size="sm"
        onHide={onHide}
      >
        <Modal.Header>
          <Modal.Title className="h6">Connect Wallet</Modal.Title>
        </Modal.Header>

        <Modal.Body className="p-3 pt-4 connect-wallet-body text-center">
          <ReactPlaceholder type="text" rows={2} ready={true}>
            {config.map(entry => {
              if (entry.enable === true) {
                return <WalletCard
                  key={entry.title}
                  login={login}
                  walletConfig={entry}
                  onDismiss={onDismiss}
                  className={entry.className}
                />
              }
            })}
          </ReactPlaceholder>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
}

export default ConnectModal;
