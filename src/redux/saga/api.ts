import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { get } from 'lodash'
import { ENDPOINTS, HIMBOX_ACCESS_TOKEN, HIMBOX_REFRESH_TOKEN, HIMBOX_USER_ID } from '../../constants'

const instance = (headers?: Record<string, string>) => {
  const returnValue = axios.create()
  const accessToken: any = localStorage.getItem(HIMBOX_ACCESS_TOKEN)
  const baseUrl = process.env.REACT_APP_API_BACKEND

  returnValue.interceptors.request.use(
    (config) => {
      if (!headers) {
        config.headers = {
          'Content-Type': 'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin': '*',
          Authentication: `Bearer ${accessToken}`,
          Authorization: `Bearer ${accessToken}`,
          lang: 'en'
        }
      }
      return config
    },
    (error) => {
      console.log(error)
      return Promise.reject(error)
    }
  )
  returnValue.interceptors.response.use(
    (response) => {
      console.log(response)
      return response
    },
    async (error) => {
      const originalRequest = error.response.config;

      if (!error.response) {
        localStorage.removeItem(HIMBOX_ACCESS_TOKEN);
        localStorage.removeItem(HIMBOX_REFRESH_TOKEN);
        // localStorage.removeItem(HIMBOX_USER_ID);

        // localStorage.removeItem(HIMBOX_REFRESH_TOKEN);
        // if (window.location.href.indexOf(ROUTES.ACCOUNT) != -1 || window.location.href.indexOf(ROUTES.TRACKING != -1)) {
        //   history.replace(ROUTES.LOGIN, { fromBrokenToken: true });
        // }
        return Promise.reject(error);
      }

      // refresh token expired 
      if (
        error.response.status === 401 &&
        originalRequest.url === '/api/v1/user/new-access-token'
      ) {
        localStorage.removeItem(HIMBOX_ACCESS_TOKEN);
        localStorage.removeItem(HIMBOX_REFRESH_TOKEN);
        // localStorage.removeItem(HIMBOX_USER_ID);
        return Promise.reject(error);
      }

      const accessToken = await localStorage.getItem(HIMBOX_ACCESS_TOKEN);

      if (accessToken && error.response.status === 401 && !originalRequest._retry) {

        originalRequest._retry = true;

        const refreshToken = localStorage.getItem(HIMBOX_REFRESH_TOKEN) || '_';
        const oldAccessToken = localStorage.getItem(HIMBOX_ACCESS_TOKEN) || '_';
        const userId = localStorage.getItem(HIMBOX_USER_ID) || '_';

        return axios({
          method: "POST",
          url: ENDPOINTS.NEW_ACCESS_TOKEN,
          headers: {
            Authorization: `Bear ${oldAccessToken}`,
          },
          data: {
            user_id: userId, refresh_token: refreshToken, old_token: oldAccessToken
          },
        })
          .then(async res => {
            if (get(res, 'data.data.token.accessToken', '')) {
              await localStorage.setItem(HIMBOX_ACCESS_TOKEN, get(res, 'data.data.token.accessToken'));
              await localStorage.setItem(HIMBOX_REFRESH_TOKEN, get(res, 'data.data.refreshToken'));
              returnValue.defaults.headers.common['Authorization'] = `Bearer ${get(res, 'data.data.token.accessToken')}`;
              return returnValue(originalRequest);
            } else {
              localStorage.removeItem(HIMBOX_ACCESS_TOKEN);
              localStorage.removeItem(HIMBOX_REFRESH_TOKEN);
              localStorage.removeItem(HIMBOX_USER_ID);

              // if (window.location.href.indexOf(ROUTES.ACCOUNT) != -1 || window.location.href.indexOf(ROUTES.TRACKING != -1)) {
              //   history.replace(ROUTES.LOGIN, { fromBrokenToken: true });
              // }
            }
          })
          .catch(err => {
            // if (get(err, 'response.status', 0) == 499 || get(err, 'response.status', 0) == 500) {
            //   localStorage.removeItem(HIMBOX_ACCESS_TOKEN);
            //   localStorage.removeItem(HIMBOX_REFRESH_TOKEN);
            //   localStorage.removeItem(LOCAL_STORAGE.ACCOUNT_ID);
            //   localStorage.removeItem(LOCAL_STORAGE.USER_INFO);
            //   if (window.location.href.indexOf(ROUTES.ACCOUNT) != -1 || window.location.href.indexOf(ROUTES.TRACKING != -1)) {
            //     history.replace(ROUTES.LOGIN, { fromBrokenToken: true });
            //   }
            // }
            return Promise.reject(err);

          })
          .finally(() => {
            return Promise.reject(error);
          });
      } else {
        return Promise.reject(error)
      };
    }
  )

  return returnValue
}

export const apiCall = (
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  url: string,
  data?: Record<string, unknown>,
  headers?: Record<string, string>,
  useBody?: boolean
): Promise<AxiosResponse<any>> => {

  // console.log(method, url, data, headers);

  const config: AxiosRequestConfig = {
    method,
    url,
  }
  if (method === 'GET') {
    config.params = data
  } else {
    config.data = data
  }
  return instance(headers)(config).then((response) => {
    return response
  })
}
export const apiCallErrorHanding = async (
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  url: string,
  data?: Record<string, unknown>,
  options: Record<string, unknown> = {}
) => {
  let result
  try {
    const response = await instance()({
      method,
      url,
      data,
      ...options,
    })
    result = response.data
    return result;
  } catch (error: any) {
    result = error.response || error
    return result;
  }
}
