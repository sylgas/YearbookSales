import {DUPLICATES_TABLE_HEADERS} from "../constants/duplicatesHeaders";
import {forEach, map} from "lodash";

export const areDuplicatesMerged = (duplicates) => duplicates.data.length < 2;

export const getDuplicatesIds = (duplicates) => map(duplicates, (duplicate) => duplicate.studentId);

export const buildMergedItem = (duplicatesSet, selected) => {
    const item = {};
    forEach(selected, (row, column) => {
        const field = DUPLICATES_TABLE_HEADERS[column].value;
        item[field] = duplicatesSet[row][field];
    });
    return item;
};

export const areAllFieldsSelected = (selected, duplicates) => {
    for (let i = 0; i < DUPLICATES_TABLE_HEADERS.length; i++) {
        if (!duplicates[selected[i]]) {
            return false;
        }
    }
    return true;
};