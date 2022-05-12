import {combineReducers} from "redux";
import {content} from "./reducer/contentReducers";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";
import { createStoreHook } from "react-redux";

const rootReducer=combineReducers({
    content
});

export const store=createStoreHook(rootReducer,applyMiddleware(thunk))
