import axios, { AxiosResponse, AxiosPromise } from 'axios';
import { getFromLocalStorage, storeStringInLocalStorage } from '../utils/helpers';

const BASE_URL = 'https://testproject-api-v2.strv.com';
const APIKey: string = process.env.REACT_APP_API_KEY || '';

const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    APIKey: APIKey,
  },
});

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    console.log({ error });
    const refreshToken = getFromLocalStorage('refreshToken');

    if (
      refreshToken &&
      error.response.status === 401 &&
      !originalRequest._retry &&
      error.response.data.error === 'User.NotAuthenticated'
    ) {
      originalRequest._retry = true;
      return axiosClient.post(`/auth/native`, { refreshToken: refreshToken }).then((response: AxiosResponse):
        | AxiosPromise<any>
        | undefined => {
        if (response.status === 200) {
          storeStringInLocalStorage('accessToken', response.headers['authorization']);
          console.log('Access token refreshed!');
        }
        return axiosClient(originalRequest);
      });
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
