import {ENABLE_DUPLICATES_LOADER, ENABLE_SALES_LOADER} from "../constants/actions";

export const enableSalesLoader = (enabled) => ({
    type: ENABLE_SALES_LOADER,
    payload: {enabled}
});

export const enableDuplicatesLoader = (enabled) => ({
    type: ENABLE_DUPLICATES_LOADER,
    payload: {enabled}
});