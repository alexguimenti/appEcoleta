import axios from "axios";

const api = axios.create({
  baseURL: "http://172.20.135.207:3333",
});

export default api;
