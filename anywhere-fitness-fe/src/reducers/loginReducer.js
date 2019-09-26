import {
    LOGIN_START
    // LOGIN_SUCCESS,
    // LOGIN_FAILURE
} from "../actions";

const initialState = {
    error: "",
    loggingIn: false
};

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_START:
            return {
                ...state,
                error: "",
                loggingIn: true
            };
        default:
            return state;
    }
}; 