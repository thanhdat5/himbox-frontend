export interface DicOption {
    [key: number]: string;
}

export const SUPPORT_EMAIL: string = 'support@himbox.io';
export const DOT_DECIMALS: any = 18;
export const USDT_DECIMALS: any = 18;

// #PROD
export const HIMBOX_POOL_CONTRACT: string = '0x30520Ab3F3B719Dfbd7764f70345415FC6d6c1Af';
export const DOT_ADDRESS: string = '0x7083609fCE4d1d8Dc0C979AAb8c869Ea2C873402';
export const NETWORK_SCAN: string = 'https://bscscan.com';
export const USDT_ADDRESS: string = '0x55d398326f99059fF775485246999027B3197955';
export const HIM_PRIVATE_SALE_CONTRACT: string = '0xc515Cd92CA8666DeEad524f786A15936E1Bf970a';
export const chainIdDefaults = 56;
export const chainIdsSupport = [chainIdDefaults]; //mainnet bsc
export const SUPPORTED_CHAIN_RPC: any = [
    'https://bsc-dataseed1.binance.org', 'https://bsc-dataseed2.binance.org',
    'https://bsc-dataseed3.binance.org', 'https://bsc-dataseed4.binance.org',
    'https://bsc-dataseed1.defibit.io', 'https://bsc-dataseed2.defibit.io',
    'https://bsc-dataseed3.defibit.io', 'https://bsc-dataseed4.defibit.io/',
    'https://bsc-dataseed1.ninicoin.io/', 'https://bsc-dataseed2.ninicoin.io/',
    'https://bsc-dataseed3.ninicoin.io/', 'https://bsc-dataseed4.ninicoin.io/',
];

// #STAGING
// export const HIMBOX_POOL_CONTRACT: string = '0x4CF4E2c84680b17f55Eb4d6B133C788f7ad3d305';
// export const DOT_ADDRESS: string = '0x0a9eCAD6f5b983F39Dd60B4810BC2a5746c1A015';
// export const NETWORK_SCAN: string = 'https://testnet.bscscan.com';
// export const USDT_ADDRESS: string = '0xa2108DA75de6B3683d27FF18A6BD902c86c5cA04';
// export const HIM_PRIVATE_SALE_CONTRACT: string = '0xeec062EF91a0db0F05E0ba69A4ABC494B6E1B1f0';
// export const chainIdDefaults = 97;
// export const chainIdsSupport = [chainIdDefaults]; //testnet bsc
// export const SUPPORTED_CHAIN_RPC: any = [
//     'https://data-seed-prebsc-1-s1.binance.org:8545/',
//     'https://data-seed-prebsc-2-s1.binance.org:8545/',
//     'http://data-seed-prebsc-1-s2.binance.org:8545/',
//     'http://data-seed-prebsc-2-s2.binance.org:8545/',
//     'https://data-seed-prebsc-1-s3.binance.org:8545/',
//     'https://data-seed-prebsc-2-s3.binance.org:8545/',
// ];
