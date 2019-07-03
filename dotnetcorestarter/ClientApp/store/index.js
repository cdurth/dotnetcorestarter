import { combineReducers } from 'redux';

import counterReducer from "../containers/Counter/reducer";
import loginReducer from "../containers/Login/reducer";
import timeReducer from "../containers/Time/reducer";

const store = combineReducers({
    counterReducer,
    loginReducer,
    timeReducer
});

export default store;