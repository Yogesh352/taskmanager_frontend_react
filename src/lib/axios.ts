import axios, { AxiosRequestConfig } from "axios";

const httpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_USE_MOCK_DATA
    ? "/api/v1"
    : process.env.NEXT_PUBLIC_API,
  withCredentials: true,
});

httpClient.interceptors.request.use((config) => {
  if (!config.headers) {
    return config;
  }

  config.headers.Accept = "application/json";
  return config;
});

httpClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const { response } = error;
    console.log(error);
    if (response && response.status && response.status === 401) {
      window.location.href = "/login";
    }

    return Promise.reject(error.response.data);
  }
);

export default function request<T, E = any>(
  config: AxiosRequestConfig
): Promise<T> {
  return httpClient.request<any, T>(config);
}
