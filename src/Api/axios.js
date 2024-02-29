import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://evangadi-amazon-api.onrender.com/",
});
export { axiosInstance };
