import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/rootReducer';
import apiMiddleware from '../midlewares/apiMiddleware';
import logMiddleware from "../midlewares/logMiddleware";

export default function configureStore() {
    return createStore(rootReducer, applyMiddleware(logMiddleware, apiMiddleware));
}