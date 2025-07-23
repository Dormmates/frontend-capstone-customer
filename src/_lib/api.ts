import axios, { type AxiosRequestConfig, type AxiosResponse } from "axios";

type RequestType = "get" | "post" | "delete" | "postFormData" | "postWithoutToken" | "postFormDataWithoutToken";
const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const request = async <T>(
  endpoint: string,
  data: any = {},
  type: RequestType,
  configs: AxiosRequestConfig = {}
): Promise<AxiosResponse<T>> => {
  const isForm = type.includes("FormData");
  const requiresAuth = !type.includes("WithoutToken");

  const headers: AxiosRequestConfig["headers"] = {
    ...(isForm ? { "Content-Type": "multipart/form-data" } : { "Content-Type": "application/json" }),
    ...configs.headers,
  };

  const config: AxiosRequestConfig = {
    url: baseUrl + endpoint,
    method: type === "get" ? "get" : type === "delete" ? "delete" : "post",
    headers,
    withCredentials: requiresAuth,
    ...configs,
  };

  if (type === "get") {
    config.params = data;
  } else {
    config.data = data;
  }

  try {
    return await axios<T>(config);
  } catch (err: any) {
    const message = err?.response?.data?.error?.message || err?.response?.statusText || err?.message || "An error occurred";
    throw new Error(message);
  }
};
