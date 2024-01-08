import { SERVER_URL } from "./SERVER_URL";
import axios from "axios";
const storedToken = localStorage.getItem(`authToken`)

export const get = (path) => {
    return axios.get(SERVER_URL + path, {
        headers: {Authoriozation: `Bearer ${storedToken}`},
    });
};

export const post = (path, body) => {
    axios.post(SERVER_URL + path, body, {
        headers: {Authoriozation: `Bearer ${storedToken}`},
    });
};

export const put = (path, body) => {
    axios.post(SERVER_URL + path, body, {
        headers: {Authoriozation: `Bearer ${storedToken}`},
    });
};

export const axiosDelete = (path) => {
    return axios.delete(SERVER_URL + path, {
        headers: {Authoriozation: `Bearer ${storedToken}`},
    });
};