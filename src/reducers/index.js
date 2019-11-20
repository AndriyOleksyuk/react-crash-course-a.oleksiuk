import { combineReducers } from 'redux';
import {RequestReducer} from './RequestReducer';
import {ThemeReducer} from './ThemeReducer';

const reducer = combineReducers({
    request: RequestReducer,
    theme: ThemeReducer
});

export default reducer;