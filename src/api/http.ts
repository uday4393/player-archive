import axios from "axios";
import { ERRORS } from "../constants";

const http = axios.create({
    baseURL: "https://web-sandbox.onefootball.com",
    headers: {
        "Content-type": "application/json"
    }
});

const responseHandler = (response: any) => {
    return response.data;
};

const errorHandler = (error: any) => {
    return Promise.reject(error.response?.data || { message: ERRORS.common.REQUEST_NOT_AVAILABLE });
};

http.interceptors.response.use(
    (response) => responseHandler(response),
    (error) => errorHandler(error)
);

export default http;