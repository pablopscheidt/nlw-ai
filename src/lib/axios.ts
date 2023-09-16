import axios from "axios";

export const api = axios.create({
    baseURL: "https://nlw-ai-orcin.vercel.app",
})