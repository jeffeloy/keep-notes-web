import axios from "axios";

const api = axios.create({
  baseURL: "https://keep-notes-api.herokuapp.com",
});

export default api;
