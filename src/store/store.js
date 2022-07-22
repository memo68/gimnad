import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";

import {authReducer} from "../reducers/auth";

const reducers = combineReducers({
    auth: authReducer,
});

export const store = createStore(
    reducers,
    applyMiddleware(thunk)
);

