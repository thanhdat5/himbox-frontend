export const STATUS: any = {
  IDLE: 'idle',
  RUNNING: 'running',
  READY: 'ready',
  SUCCESS: 'success',
  ERROR: 'error',
};
export const connectorLocalStorageKey = 'connectorId';
export enum ConnectorNames {
  Injected = 'injected',
  BSC = 'bsc',
  // WalletConnect = 'WalletConnect'
}

export declare enum ChainId {
  MAINNET = 56,
  TESTNET = 97
}

export const NETWORK_CHAIN_ID = 97//parseInt(process.env.REACT_APP_CHAIN_ID ?? `${ChainId.MAINNET}`);
export const NETWORK_URL = 'https://bsc-dataseed.binance.org/';
export const NetworkContextName = 'NETWORK';

export const CURRENCY_SUPPORT: any = {
  "0x0000000000000000000000000000000000000000": "BNB",
  "0xe8BA4c94713bA1B5f206767885415304942e783b": "MAT",
  "0x56730B43e05049D9ba4938f005B767EAcFE6c9f6": "MAT",
  "0xf3147987a00D35EeCC10C731269003CA093740CA": "MAT",
  "0xf3147987a00d35eecc10c731269003ca093740ca": "MAT"
}


export const MAX_UINT = "115792089237316195423570985008687907853269984665640564039457584007913129639935";
export const MAX_SWAP_UNIT = '1000000000000000000000000000000000';