import {ENABLE_SALES_LOADER} from "../constants/actions";

export const enableSalesLoader = (enabled) => ({
    type: ENABLE_SALES_LOADER,
    payload: {enabled}
});