import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/rootReducer';
import apiMiddleware from '../midlewares/apiMiddleware';

export default function configureStore() {
    return createStore(rootReducer)
}