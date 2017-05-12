const apiMiddleware = (dispatch, getState) => next => action => {
    next(action);
};

export default apiMiddleware;