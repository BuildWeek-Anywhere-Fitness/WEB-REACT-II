import { axiosWithAuth } from "../utils/axiosWithAuth";
import cookie from 'react-cookies';

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";
export const register = user => dispatch => {
    dispatch({ type: REGISTER_START });
    return axiosWithAuth()
        .post("https://anywhere-health.herokuapp.com/api/users/register", user)
        .then(res => {
            dispatch({ type: REGISTER_SUCCESS, payload: res.data })
            return true;
        })
        .catch(err => {
            dispatch({ type: REGISTER_FAILURE, payload: err.response })
        });
};

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const login = credentials => dispatch => {
    dispatch({ type: LOGIN_START });
    return axiosWithAuth()
        .post("https://anywhere-health.herokuapp.com/api/users/login", credentials)
        .then(res => {
            localStorage.setItem("token", res.data.token);
            cookie.save('instructor', res.data.instructor)
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data.instructor
            });
            dispatch({ type: LOGIN_SUCCESS });
            return true;
        })
        .catch(err => {
            dispatch({
                type: LOGIN_FAILURE,
                payload: err.response.data
            });
        });
};

export const isLoggedIn = instructor => dispatch => {
    dispatch({ type: LOGIN_SUCCESS, payload: instructor });
}

export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const logout = () => dispatch => {
    dispatch({ type: LOGOUT_SUCCESS });
    localStorage.removeItem("token");
    cookie.remove('instructorId')
}

export const GETALLCLASSES_BYINSTRUCTOR_START = "GETALLCLASSES_BYINSTRUCTOR_START";
export const GETALLCLASSES_BYINSTRUCTOR_SUCCESS = "GETALLCLASSES_BYINSTRUCTOR_SUCCESS";
export const GETALLCLASSES_BYINSTRUCTOR_FAILURE = "GETALLCLASSES_BYINSTRUCTOR_FAILURE";
export const getAllClassesByInstructor = instructorId => dispatch => {
    dispatch({ type: GETALLCLASSES_BYINSTRUCTOR_START });
    axiosWithAuth()
        .get(`https://anywhere-health.herokuapp.com/api/classes`)
        .then(res => {
            dispatch({
                type: GETALLCLASSES_BYINSTRUCTOR_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => console.log(err))
} 
