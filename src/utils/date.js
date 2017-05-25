import moment from "moment";

const formatDateWithFormat = (date, format) => {
    if (!date) {
        return '';
    }
    return moment(date).format(format);
};

export const formatDate = (date) => {
    return formatDateWithFormat(date, 'l');
};

export const formatDateWithMonthNames = (date) => {
    return formatDateWithFormat(date, 'LL');
};

export const daysSinceNow = (date) => {
    const now = moment().startOf('day');
    const days = moment(date).startOf('day').diff(now, 'days');
    return days > 0 ? days : 0;
};