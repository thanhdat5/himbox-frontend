import numeral from 'numeral';
import { get } from 'lodash';
const exactMath = require("exact-math");

export function validatePwd(str: string): boolean {
    let validatePassword = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@.=?#$%^&*()\-_+])[A-Za-z\d!@.=?#$%^&*()\-_+]{8,}$/);
    return validatePassword.test(str);
}

export const validateEmail = (email: string) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

export const extractError = (err: any): string => {
    return get(err, 'response.data.msg', '') || get(err, 'response.data[0].msg', '');
}

export const formatNumberDownRoundWithExtractMax = (number: any, decimal: number) => {
    return exactMath
        .div(
            exactMath.floor(exactMath.mul(number, exactMath.pow(10, decimal))),
            exactMath.pow(10, decimal)
        )
        .toFixed(decimal)
        .replace(/\.0+$/, '');
};

export const formatNumberDownRound = (number: any, decimal = 3) => {
    console.log('nummmmm', number);
    if (number === null || number === undefined) return 0;

    const decimalFormat = `0,0.${'0'.repeat(decimal)}`;

    if (typeof number === "string") {
        number = Number(number);
    }

    const sub = number.toString().split(".");
    if (sub.length >= 2) {
        const precision = sub[1].substring(0, decimal);
        const leading = numeral(sub[0]).format('0,0');;
        const trailing = String(parseFloat(`0.${precision}`)).toString().slice(2);
        return `${leading}.${trailing}`
    }
    return numeral(number.toFixed(decimal)).format(decimalFormat).replace(/\.0+$/, '').toString();
};

export const toFixedWithoutZeros = (num: any, precision: number) => `${Number.parseFloat(num.toFixed(precision))}`;

export const convertNumber = (number: any, pow: number = 8) => {
    number = Number(number)
    return Math.round(number * 10 ** pow) / 10 ** pow;
}

export const formatCurrency = (num: any) => {
    return numeral(num).format('0,0.0');
};

export const formatBal = (num: any) => {
    return parseFloat(numeral(num).format('0,0.000'));
};