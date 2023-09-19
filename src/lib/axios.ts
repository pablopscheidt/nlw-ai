import axios from "axios";

export const api = axios.create({
    baseURL: "https://server-api-0hc7.onrender.com",
})