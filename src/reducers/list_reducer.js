import types from '../actions/types';

const DEFAULT_STATE = {
    itemList: {}, //list of all todo
    itemDetail: {}, //single todo item
}

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case types.GET_ITEM_LIST:
            return { ...state, itemList: action };
        default:
            return state;
    }
}