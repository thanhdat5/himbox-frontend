export interface DicOption {
    [key: number]: string;
}

export const HIMBOX_POOL_CONTRACT: string = '0x0C56211b9669aD60dcbb222a7E8B4e674e816197';

export const DOT_ADDRESS: string = '0x9FFeb96567065E9b2Bd7DacEbF573d50732ef8BE';

export const BSC_RPC: DicOption = {
    56: "https://bsc-dataseed.binance.org/",
    97: "https://data-seed-prebsc-1-s1.binance.org:8545/"
}

export const chainIdsSupport = [1284]; //mainnet
export const chainIdDefaults = 1284;