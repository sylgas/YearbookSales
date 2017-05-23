const logMiddleware = ({dispatch, getState}) => next => action => {
    console.log("Dispatching: " + action.type);
    next(action);
};

export default logMiddleware;