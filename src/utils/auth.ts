import { UserType, UserDetailsType, LoginDetailsType } from '../types';
import api from '../api';

async function removeUserDetails() {
  localStorage.removeItem('userDetails');
}

export function setUserDetails(user: UserType, accessToken: string): void {
  localStorage.setItem(
    'userDetails',
    JSON.stringify({
      user,
      accessToken,
    })
  );
}

export async function refreshToken(token: string): Promise<{ user: UserType; accessToken: string }> {
  const response = await api.refreshTokenAPI(token);
  return response;
}

export async function signupUser(userDetails: UserDetailsType): Promise<UserType> {
  const response = await api.signupUserAPI(userDetails);
  return response;
}

export async function loginUser(
  loginDetails: LoginDetailsType
): Promise<{ user: UserType; accessToken: string; refreshToken: string }> {
  const response = await api.loginUserAPI(loginDetails);
  return response;
}

export async function logoutUser(): Promise<void> {
  const response = await removeUserDetails();
  return response;
}
