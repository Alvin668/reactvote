function createStore(reducer) {
    if (typeof reducer !== 'function') {
        throw new TypeError(`${reducer} must be a function!`);
    }

    let initState;
    let eventList = [];
    const getState = function getState() {
        let state = JSON.parse(JSON.stringify(initState));
        return state;
    }

    const subscribe = function subscribe(func) {
        if (typeof func !== 'function') return;
        if (!eventList.includes(func)) {
            eventList.push(func);
        }
        return function unsubscribe() {
            eventList = eventList.filter(item => item !== func);
        }

    }

    const dispatch = function dispatch(action) {
        if (action === null || action === undefined) return;
        if (typeof action !== 'object') return;
        if (!action.hasOwnProperty('type')) return;
        initState = reducer(initState, action);
        eventList.forEach(item => {
            item();
        });

    }

    dispatch({
        type: `@@redux/INIT${Math.random()}`
    })

    return {
        getState,
        subscribe,
        dispatch
    }
}

export {
    createStore
};