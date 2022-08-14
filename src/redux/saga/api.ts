import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

const instance = (headers?: Record<string, string>) => {
  const returnValue = axios.create()
  const accessToken: any = sessionStorage.getItem('accessToken')
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
    (error) => {
      console.log('errrrorr', error);
      if (error.response.status === 401) {
        const url = `https://test-signin.fsoft.com.vn/auth/realms/XOne/protocol/openid-connect/logout?redirect_uri=${baseUrl}Logout`
        window.open(url, '_self')
        return Promise.resolve();
      }
      return Promise.reject(error);
      // console.log("<>",error.response)
      // console.log("<>",error)
      // return Promise.reject(error)
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
