import { createStore, combineReducers} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import UserReducer from "./UserReducer";
const rootReducer = combineReducers( {
    user: UserReducer,
})
export const store = createStore(
    rootReducer,
    composeWithDevTools()
);