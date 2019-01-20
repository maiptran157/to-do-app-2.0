import types from '../actions/types';
import itemList from '../dummy_data/item_list';

const DEFAULT_STATE = {
    itemList: itemList,
}

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case types.ADD_ITEM:
            return { ...state, itemList: action.payload };
        default:
            return state;
    }
}