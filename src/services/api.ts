import axios from "axios";

export const api = axios.create({
  baseURL: "https://testetecnico-simbiox.onrender.com",
  timeout: 20000,
});
