import axios from "axios";

const api = axios.create({
  baseURL: "http://172.18.244.63:3333",
});

export default api;
