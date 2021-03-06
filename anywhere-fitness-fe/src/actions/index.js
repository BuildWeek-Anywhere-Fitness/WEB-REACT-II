import { axiosWithAuth } from "../utils/axiosWithAuth";

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";
export const register = credentials => dispatch => {
    dispatch({ type: REGISTER_START })
    return axiosWithAuth()
        .post("https://anywhere-health.herokuapp.com/api/users/register", credentials)
        .then(res => localStorage.setItem("token", res.data.access_token))
        .catch(err => console.log(err));
};

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const login = credentials => dispatch => {
    dispatch({ type: LOGIN_START });
    return axiosWithAuth()
        .post("https://anywhere-health.herokuapp.com/api/users/login", credentials)
        .then(res => console.log(res))
        .catch(err => console.log(err));
};