import moment from "moment";

export function formatDate(dateString: string): string {
    const obj = new Date(dateString);
    const aux = (obj.getMonth() + 1);
    const month = (aux < 10) ? `0${aux}` : aux;
    return `${obj.getDate()}/${month}/${obj.getFullYear()}`;
}

export function formatEpochTime(start: any, end: any): any {
    const sDate = moment(new Date(Number(start) * 1000)).utc();
    const eDate = moment(new Date(Number(end) * 1000)).utc();
    return `${sDate.format("YYYY-MM")} - ${eDate.format("YYYY-MM")}`;
}