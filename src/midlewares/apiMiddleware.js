import {FETCH_SALES} from "../constants/actions";
import {fetchSalesSuccess} from "../actions/salesEvents";
import {fetchSales} from "../api/salesApi";

const apiMiddleware = ({dispatch, getState}) => next => action => {
    if (action.type === FETCH_SALES) {
        fetchSales().then((data) => dispatch(fetchSalesSuccess(data.sales)));
    }
    next(action);
};

export default apiMiddleware;