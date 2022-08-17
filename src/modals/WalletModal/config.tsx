import { ConnectorNames } from '../../literals';
import { isBinanceExtensionAvailable, isMetamaskAvailable, isTrustWalletAvailable } from '../../utils/utils';

import { Config } from './types';

const connectors: Config[] = [
  {
    title: 'Metamask',
    icon: '/images/metamask.svg',
    connectorId: ConnectorNames.Injected,
    enable: isMetamaskAvailable(),
    className: 'tq_btn_primary mb-4'
  },
  {
    title: 'Binance Chain Wallet',
    icon: '/images/bscwallet.svg',
    connectorId: ConnectorNames.BSC,
    enable: isBinanceExtensionAvailable()
  },
  {
    title: 'TrustWallet',
    icon: '/images/trust.svg',
    connectorId: ConnectorNames.Injected,
    enable: isTrustWalletAvailable()
  },
];

export default connectors;
