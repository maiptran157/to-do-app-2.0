import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import sampleReducer from './sample_reducer';

const rootReducer = combineReducers({
    sample: sampleReducer,
});

export default rootReducer;