// import types from '../actions/types';
// import itemList from '../dummy_data/item_list';

// const DEFAULT_STATE = {
//     itemList: itemList,
// }

// export default (state = DEFAULT_STATE, action) => {
//     switch (action.type) {
//         case types.ADD_ITEM:
//             return { ...state, itemList: action.payload };
//         default:
//             return state;
//     }
// }

import types from '../actions/types';

const DEFAULT_STATE = {
    all: [], //list of all todo
    single: {}, //single todo item
}

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        // case types.ADD_LIST_ITEM:
        //     return { ...state, all: action.payload };
        default:
            return state;
    }
}