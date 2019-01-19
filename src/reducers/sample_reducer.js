import types from '../actions/types';

const DEFAULT_STATE = {
    sample_default_item: [],
}

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case types.SAMPLE_ACTION_TYPE:
            return { ...state, sample_default_item: action.payload };
        default:
            return state;
    }
}