import axios from "axios";
import { Platform } from "react-native";

// baseURL: "",

const instance = axios.create({
  baseURL:
    Platform.OS == "android"
      ? "https://rcservice.onrender.com/api"
      : "http://localhost:3000/api",
  withCredentials: true,
});
export default instance;
