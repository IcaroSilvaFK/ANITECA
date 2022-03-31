import axios from "axiso";

export const api = axios.create({ baseURL: "https://api.jikan.moe/v4/" });
