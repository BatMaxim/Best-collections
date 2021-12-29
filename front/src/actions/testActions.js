import {BTN_CLICK} from "../store/types/testTypes";

export const click_btn = (btn) => ({
    type: BTN_CLICK,
    payload: {
        btn
    },
});