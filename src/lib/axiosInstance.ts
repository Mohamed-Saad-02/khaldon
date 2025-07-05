import showToast from "@/components/UsedShadcn/UseToast";
import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (
      error.response.status === 401 &&
      error?.response?.data?.error === "Invalid token"
    ) {
      localStorage.removeItem("token");
      showToast({
        title: "Session Expired",
        description: "Please login again",
      }).error();
    }

    return Promise.reject(error?.response?.data?.error || "Failed");
  },
);

export default instance;
