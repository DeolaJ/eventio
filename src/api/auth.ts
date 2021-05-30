import { AxiosResponse } from 'axios';

import axiosClient from './apiClient';
import { UserDetailsType, LoginDetailsType, UserType } from '../types';

export async function refreshTokenAPI(refreshToken: string): Promise<{ user: UserType; accessToken: string }> {
  return axiosClient
    .post(`/auth/native`, {
      refreshToken,
    })
    .then(async (response: AxiosResponse) => {
      const accessToken = response.headers['Authorization'] || '';
      const user = response.data;

      return {
        user,
        accessToken,
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

export async function loginUserAPI(
  loginDetails: LoginDetailsType
): Promise<{ user: UserType; accessToken: string; refreshToken: string }> {
  const { email, password } = loginDetails;

  return axiosClient
    .post(`/auth/native`, {
      email,
      password,
    })
    .then(async (response: AxiosResponse) => {
      const accessToken = response.headers['Authorization'] || '';
      const refreshToken = response.headers['Refresh-Token'] || '';
      const user = response.data;

      return {
        user,
        accessToken,
        refreshToken,
      };
    });
}
