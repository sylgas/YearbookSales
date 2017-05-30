import {DUPLICATES_TABLE_HEADERS} from "../constants/duplicatesHeaders";

export const areDuplicatesMerged = (duplicates) => duplicates.data.length < 2;

export const getDuplicatesIds = (duplicatesSet) => duplicatesSet.map((duplicate) => duplicate.studentId);

export const buildMergedItem = (duplicatesSet, selected) => {
    const item = {};
    selected.forEach((row, column) => {
        const field = DUPLICATES_TABLE_HEADERS[column].value;
        item[field] = duplicatesSet[row][field];
    });
    return item;
};

export const areAllFieldsSelected = (selected) => {
    for (let i = 0; i < DUPLICATES_TABLE_HEADERS.length; i++) {
        if (selected[i] === undefined) {
            return false;
        }
    }
    return true;
};