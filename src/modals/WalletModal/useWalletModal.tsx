import React from 'react';
import useModal from '../useModal';

import ConnectModal from './ConnectModal';
import { Login } from './types';

interface ReturnType {
  onPresentConnectModal: () => void;
}

const useWalletModal = (login: Login, logout: () => void, account?: string): ReturnType => {
  const [onPresentConnectModal] = useModal(<ConnectModal login={login} />);
  return { onPresentConnectModal };
};

export default useWalletModal;
