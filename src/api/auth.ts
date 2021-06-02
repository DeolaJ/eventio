import { AxiosResponse } from 'axios';

import axiosClient from './apiClient';
import { UserDetailsType, LoginDetailsType, UserType } from '../types';
import { storeStringInLocalStorage } from '../utils/helpers';

export async function refreshTokenAPI(refreshToken: string): Promise<{ user: UserType }> {
  return axiosClient
    .post(`/auth/native`, {
      refreshToken,
    })
    .then(async (response: AxiosResponse) => {
      const accessToken = response.headers['authorization'] || '';
      const user = response.data;

      storeStringInLocalStorage('accessToken', accessToken);

      return {
        user,
      };
    });
}

export async function signupUserAPI(userDetails: UserDetailsType): Promise<UserType> {
  const { firstName, lastName, email, password } = userDetails;

  return axiosClient
    .post(`/users`, {
      firstName,
      lastName,
      email,
      password,
    })
    .then((response: AxiosResponse) => response.data);
}

export async function loginUserAPI(loginDetails: LoginDetailsType): Promise<{ user: UserType }> {
  const { email, password } = loginDetails;

  return axiosClient
    .post(`/auth/native`, {
      email,
      password,
    })
    .then(async (response: AxiosResponse) => {
      const accessToken = response.headers['authorization'] || '';
      const refreshToken = response.headers['refresh-token'] || '';
      const user = response.data;

      storeStringInLocalStorage('accessToken', accessToken);
      storeStringInLocalStorage('refreshToken', refreshToken);

      return {
        user,
      };
    });
}
