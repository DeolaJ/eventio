import { UserType, UserDetailsType, LoginDetailsType } from '../types';
import api from '../api';
import { removeFromLocalStorage } from './helpers';

export function setUserDetails(user: UserType): void {
  localStorage.setItem(
    'userDetails',
    JSON.stringify({
      user,
    })
  );
}

export function loadUserDetails(): UserType {
  const emptyUser = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    createdAt: '',
    updatedAt: '',
  };
  try {
    const serializedState = localStorage.getItem('userDetails');
    if (serializedState === null) {
      return emptyUser;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return emptyUser;
  }
}

export function checkAuth(): boolean {
  return localStorage.getItem('userDetails') !== null;
}

export async function refreshToken(token: string): Promise<{ user: UserType }> {
  const response = await api.refreshTokenAPI(token);
  return response;
}

export async function signupUser(userDetails: UserDetailsType): Promise<UserType> {
  const response = await api.signupUserAPI(userDetails);
  return response;
}

export async function loginUser(loginDetails: LoginDetailsType): Promise<{ user: UserType }> {
  const response = await api.loginUserAPI(loginDetails);
  return response;
}

export async function logoutUser(): Promise<void> {
  removeFromLocalStorage('userDetails');
  removeFromLocalStorage('accessToken');
  removeFromLocalStorage('refreshToken');
  return;
}
