import { createStore, combineReducers} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import TestReducer from "./Test";
const rootReducer = combineReducers( {
    test: TestReducer,
})
export const store = createStore(
    rootReducer,
    composeWithDevTools()
);