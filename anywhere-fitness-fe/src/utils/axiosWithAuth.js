import axios from "axios";

export const axiosWithAuth = () => {
    const token = localStorage.getItem("token");

    return axios.create({
        headers: {
            Authorization: token
        },
        baseURL: "https://anywhere-fitness-azra-be.herokuapp.com/api/auth/"
    });
}; 