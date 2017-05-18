import {applyMiddleware, createStore} from "redux";
import rootReducer from "../reducers/rootReducer";
//import apiMiddleware from '../midlewares/apiMiddleware';
import logMiddleware from "../midlewares/logMiddleware";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas/rootSaga"

export default function configureStore() {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(rootReducer,
        applyMiddleware(
            logMiddleware,
            //apiMiddleware
            sagaMiddleware
        ));
    sagaMiddleware.run(rootSaga);
    return store;
}