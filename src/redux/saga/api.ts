import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { get } from "lodash";
import {
  BASE_URL,
  ENDPOINTS,
  HIMBOX_ACCESS_TOKEN,
  HIMBOX_REFRESH_TOKEN,
  HIMBOX_USER_ID,
  HIMBOX_USER_INFO,
  ROUTES,
} from "../../constants";
import { history } from "../../utils/history";

const instance = (headers?: Record<string, string>) => {
  let returnValue = axios.create();

  returnValue.interceptors.request.use(
    async (config) => {
      // if (!headers) {
      const accessToken: any = await localStorage.getItem(HIMBOX_ACCESS_TOKEN);
      config.headers = {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${accessToken}`,
        lang: "en",
      };
      // }
      return config;
    },
    (error) => {
      console.log(error);
      return Promise.reject(error);
    }
  );
  returnValue.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const originalRequest = error.response.config;
      // console.log('originalRequestoriginalRequest', originalRequest);
      // console.log('error', error);
      if (!error.response) {
        localStorage.removeItem(HIMBOX_ACCESS_TOKEN);
        localStorage.removeItem(HIMBOX_REFRESH_TOKEN);
        localStorage.removeItem(HIMBOX_USER_ID);
        localStorage.removeItem(HIMBOX_USER_INFO);
        history.push(ROUTES.LOGIN);
        return Promise.reject(error);
      }

      // refresh token expired
      if (
        error.response.status === 401 &&
        originalRequest.url === "/api/v1/user/new-access-token"
      ) {
        // console.log('1')
        localStorage.removeItem(HIMBOX_ACCESS_TOKEN);
        localStorage.removeItem(HIMBOX_REFRESH_TOKEN);
        localStorage.removeItem(HIMBOX_USER_ID);
        localStorage.removeItem(HIMBOX_USER_INFO);
        history.push(ROUTES.LOGIN);
        return Promise.reject(error);
      }

      const accessToken = await localStorage.getItem(HIMBOX_ACCESS_TOKEN);
      // console.log('111111', error.response.status === 401, !originalRequest._retry);
      if (
        accessToken &&
        error.response.status === 401 &&
        !originalRequest._retry
      ) {
        originalRequest._retry = true;

        const refreshToken = localStorage.getItem(HIMBOX_REFRESH_TOKEN) || "_";
        const oldAccessToken = localStorage.getItem(HIMBOX_ACCESS_TOKEN) || "_";
        const userId = localStorage.getItem(HIMBOX_USER_ID) || "_";

        return axios({
          method: "POST",
          url: `${BASE_URL}${ENDPOINTS.NEW_ACCESS_TOKEN}`,
          headers: {
            Authorization: `Bear ${oldAccessToken}`,
          },
          data: {
            user_id: userId,
            refresh_token: refreshToken,
            old_token: oldAccessToken,
          },
        })
          .then(async (res) => {
            // console.log("resssssss", res);
            if (get(res, "data.code", 0) === 200) {
              await localStorage.setItem(
                HIMBOX_ACCESS_TOKEN,
                get(res, "data.data.token.access_token")
              );
              await localStorage.setItem(
                HIMBOX_REFRESH_TOKEN,
                get(res, "data.data.refresh_token")
              );
              returnValue.defaults.headers.common[
                "Authorization"
              ] = `Bearer ${get(res, "data.data.token.access_token")}`;
              // console.log("return values", returnValue);
              return returnValue(originalRequest);
            } else {
              console.log('2')
              localStorage.removeItem(HIMBOX_ACCESS_TOKEN);
              localStorage.removeItem(HIMBOX_REFRESH_TOKEN);
              localStorage.removeItem(HIMBOX_USER_ID);
              localStorage.removeItem(HIMBOX_USER_INFO);
              history.push(ROUTES.LOGIN);
            }
          })
          .catch((err) => {
            console.log('3')
            localStorage.removeItem(HIMBOX_ACCESS_TOKEN);
            localStorage.removeItem(HIMBOX_REFRESH_TOKEN);
            localStorage.removeItem(HIMBOX_USER_ID);
            localStorage.removeItem(HIMBOX_USER_INFO);
            history.push(ROUTES.LOGIN);
            return Promise.reject(err);
          })
          .finally(() => {
            return 1;
          });
      } else {
        console.log('4')
        // localStorage.removeItem(HIMBOX_ACCESS_TOKEN);
        // localStorage.removeItem(HIMBOX_REFRESH_TOKEN);
        // localStorage.removeItem(HIMBOX_USER_ID);
        // localStorage.removeItem(HIMBOX_USER_INFO);
        // history.push(ROUTES.LOGIN);
        return Promise.reject(error);
      }
    }
  );
  // console.log('5')
  return returnValue;
};

export const apiCall = (
  method: "GET" | "POST" | "PUT" | "DELETE",
  url: string,
  data?: Record<string, unknown>,
  headers?: Record<string, string>,
  useBody?: boolean
): Promise<AxiosResponse<any>> => {

  const config: AxiosRequestConfig = {
    method,
    url,
    baseURL: BASE_URL,
  };
  if (method === "GET") {
    config.params = data;
  } else {
    config.data = data;
  }
  return instance(headers)(config).then((response) => {
    return response;
  });
};
export const apiCallErrorHanding = async (
  method: "GET" | "POST" | "PUT" | "DELETE",
  url: string,
  data?: Record<string, unknown>,
  options: Record<string, unknown> = {}
) => {
  let result;
  try {
    const response = await instance()({
      method,
      url,
      data,
      ...options,
    });
    result = response.data;
    return result;
  } catch (error: any) {
    result = error.response || error;
    return result;
  }
};
