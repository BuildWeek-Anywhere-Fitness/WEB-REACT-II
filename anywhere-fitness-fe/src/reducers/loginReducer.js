import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS
} from "../actions";

const initialState = {
    error: "",
    loggingIn: false,
    loggedIn: false
};

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_START:
            return {
                ...state,
                error: "",
                loggingIn: true
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                error: "",
                loggingIn: false,
                loggedIn: true
            }
        case LOGOUT_SUCCESS:
            return {
                ...state,
                loggedIn: false
            }
        default:
            return state;
    }
};