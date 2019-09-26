import {
    REGISTER_START
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
                console.log('reducer:', action)
            return {
                ...state,
                error: "",
                creatingUser: true
            }
        default:
            return state;
    }
} 