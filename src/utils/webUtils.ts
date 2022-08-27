import Web3 from "web3";
import axios from 'axios';
import { random } from 'lodash';
import { SUPPORTED_CHAIN_RPC } from "../_config";

export const createWeb3WithNode = async (bscURI: string) => {
    let web3;
    try {
        console.log("provider URI==>", bscURI);
        const check = await axios.post(bscURI);
        if (check.status === 200) {
            web3 = new Web3(bscURI);
        } else {
            bscURI = SUPPORTED_CHAIN_RPC[random(0, SUPPORTED_CHAIN_RPC.length - 1)]
            web3 = new Web3(bscURI);
        }
    } catch (error) {
        bscURI = SUPPORTED_CHAIN_RPC[random(0, SUPPORTED_CHAIN_RPC.length - 1)]
        web3 = new Web3(bscURI);
    }
    return web3;
}