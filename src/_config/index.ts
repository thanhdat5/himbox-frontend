export interface DicOption {
    [key: number]: string;
}

export const HIMBOX_POOL_CONTRACT: DicOption = {
    56: '0x68190211006cDE591B177854bF6aAd26b0E37D00', //mainnet
    97: '0x68190211006cDE591B177854bF6aAd26b0E37D00',//testNet;
};

export const DOT_ADDRESS: DicOption = {
    56: '0x08f43498D7870C98501213A9d18EfcdD8f77c42F', //mainnet
    97: '0x08f43498D7870C98501213A9d18EfcdD8f77c42F',//testNet;
};

export const BSC_RPC: DicOption = {
    56: "https://bsc-dataseed.binance.org/",
    97: "https://data-seed-prebsc-1-s1.binance.org:8545/"
}

export const chainIdsSupport = [97]; //mainnet
export const chainIdDefaults = 97;