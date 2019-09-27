import {
    REGISTER_START, REGISTER_SUCCESS, REGISTER_FAILURE
    // REGISTER_SUCCESS,
    // REGISTER_FAILURE
} from "../actions";

const initialState = {
    users: [],
    creatingUser: false,
    error: ""
}

export const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_START:
            return {
                ...state,
                error: "",
                creatingUser: true
            }
        case REGISTER_SUCCESS:
            console.log('reducer: ', action)
            return {
                ...state,
                users: action.payload,
                creatingUser: false
            }
        case REGISTER_FAILURE:
            return {
                ...state,
                error: action.payload,
                creatingUser: false
            }
        default:
            return state;
    }
}