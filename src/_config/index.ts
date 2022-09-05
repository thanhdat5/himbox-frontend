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
export const USDT_ADDRESS: string = '0xAa36B80Bed8F260496f7561D49C7a407931D194c'; //Update a Trung gui
export const HIM_PRIVATE_SALE_CONTRACT: string = '0xC199404e8B340B40c6E7Fa4488A155E3c252018f'; //Update a Trung gui
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
// export const HIM_PRIVATE_SALE_CONTRACT: string = '0x467d8fBeC7811A48dA51b64Bf326D26f2302B925';
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
