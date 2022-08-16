import { BscConnector } from '@binance-chain/bsc-connector';
import { Web3Provider } from '@ethersproject/providers';
import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
// import { WalletLinkConnector } from '@web3-react/walletlink-connector';

import { ConnectorNames, NETWORK_CHAIN_ID, NETWORK_URL } from '../literals';
import { chainIdsSupport } from '../_config';

import { NetworkConnector } from './NetworkConnector';

if (typeof NETWORK_URL === 'undefined') {
  throw new Error('REACT_APP_NETWORK_URL must be a defined environment variable');
}

export const network = new NetworkConnector({
  urls: { [NETWORK_CHAIN_ID]: NETWORK_URL },
});

let networkLibrary: Web3Provider | undefined;
export function getNetworkLibrary(): Web3Provider {
  // eslint-disable-next-line no-return-assign
  return (networkLibrary = networkLibrary ?? new Web3Provider(network.provider as any));
}

export const injected = new InjectedConnector({
  supportedChainIds: chainIdsSupport,
});

export const bscConnector = new BscConnector({ supportedChainIds: chainIdsSupport });

// mainnet only
export const walletConnect = new WalletConnectConnector({
  rpc: { [NETWORK_CHAIN_ID]: NETWORK_URL },
  qrcode: true,
  // pollingInterval: 15000,
});



export const connectorsByName: { [connectorName in ConnectorNames]: any } = {
  [ConnectorNames.Injected]: injected,
  [ConnectorNames.BSC]: bscConnector,
  // [ConnectorNames.WalletConnect]: walletConnect,
};
