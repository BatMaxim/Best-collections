import {createStore, combineReducers, applyMiddleware} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import UserReducer from "./UserReducer";
import UsersReducer from "./UsersReducer";
import thunk from "redux-thunk";
import CollectionsReducer from "./CollectionsReducer";

const rootReducer = combineReducers( {
    user: UserReducer,
    admin: UsersReducer,
    collections: CollectionsReducer,
})
export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);