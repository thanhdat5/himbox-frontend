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
        .toFixed(decimal);
};