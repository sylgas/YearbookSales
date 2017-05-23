const pad = (numberString, size) => {
    const padded = numberString.toString();
    if (padded.length < size) {
        return '0'.repeat(size - padded.length) + padded;
    }
    return padded;
};

export const formatDate = (date) => {
    if (!date) {
        return '';
    }
    return [
        pad(date.getMonth() + 1, 1),
        pad(date.getDate(), 2),
        pad(date.getFullYear(), 4),
    ].join('/');
};