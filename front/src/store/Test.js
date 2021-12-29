import {BTN_CLICK} from "./types/testTypes"
const initialState = {
    btn: false
}

const TestReducer = (state = initialState, {payload, type})=>{
    switch (type){
        case BTN_CLICK:
            return {
                ...state,
                btn: payload.btn,
            }
        default:
            return state;
    }
}
export default TestReducer;