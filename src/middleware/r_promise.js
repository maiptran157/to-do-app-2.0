export default (store) => (next) => (action) => {

    if (!action.payload || !action.payload.then) {
        return next(action);
    }

    action.payload.then((resp) => {
        const newAction = {
            ...action,
            apyload: resp
        };

        store.dispatch(newAction);

    });

    return action.payload; //this will return a promise

}