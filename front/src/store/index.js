import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import UserReducer from "./UserReducer";
import UsersReducer from "./UsersReducer";
import CollectionsReducer from "./CollectionsReducer";
import CurrentCollectionReducer from "./CurrentCollectionReducer";
import TagsReducer from "./TagsReducer";

const rootReducer = combineReducers( {
    user: UserReducer,
    admin: UsersReducer,
    collections: CollectionsReducer,
    collection: CurrentCollectionReducer,
    tags: TagsReducer,
})
export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);