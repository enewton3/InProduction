import axios from "axios";

const baseUrl =
  process.env.NODE_ENV === "development"
    ? "https://localhost:3000"
    : "https://inproductionapp.heroku.app";

const api = axios.create({
  baseURL: baseUrl,
});

export default api;
