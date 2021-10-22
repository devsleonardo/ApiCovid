import axios from "axios";

const api = axios.create({
  baseURL:'https://covid19-api.com/'
});

export default api;