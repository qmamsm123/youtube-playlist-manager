import axios from "axios";
import { ACCESS_TOKEN_KEY } from "constants/common";
import qs from "qs";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_GOOGLE_API_URL,
  params: {
    key: process.env.NEXT_PUBLIC_GOOGLE_API_CLIENT_ID,
  },
});

axiosInstance.defaults.paramsSerializer = (params) => {
  return qs.stringify(params, { arrayFormat: "repeat" });
};

axiosInstance.interceptors.request.use((config) => {
  const accessToken = sessionStorage.getItem(ACCESS_TOKEN_KEY);
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      sessionStorage.removeItem(ACCESS_TOKEN_KEY);
      window.location.href = "/login";
    }
    return Promise.reject(error);
  },
);
