/* eslint-disable no-undef */
import { toast } from 'react-toastify';
import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';

import utils from '../../utils';
import { UserDetailsType, LoginDetailsType, StateType, UserType } from '../../types';
import {
  REFRESH_TOKEN_START,
  REFRESH_TOKEN_FAILURE,
  REFRESH_TOKEN_SUCCESS,
  SIGNUP_USER_START,
  SIGNUP_USER_FAILURE,
  SIGNUP_USER_SUCCESS,
  LOGIN_USER_START,
  LOGIN_USER_FAILURE,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER_START,
  LOGOUT_USER_FAILURE,
  LOGOUT_USER_SUCCESS,
} from './types';

const refreshTokenStart = () => ({
  type: REFRESH_TOKEN_START,
});

const refreshTokenSuccess = (payload: { user: UserType; accessToken: string }) => ({
  type: REFRESH_TOKEN_SUCCESS,
  payload,
});

const refreshTokenFailure = (payload: { error: string }) => ({
  type: REFRESH_TOKEN_FAILURE,
  payload,
});

const signupUserStart = (payload: { isCreatingAccount: boolean }) => ({
  type: SIGNUP_USER_START,
  payload,
});

const signupUserSuccess = (payload: { isCreatingAccount: boolean; user: UserType }) => ({
  type: SIGNUP_USER_SUCCESS,
  payload,
});

const signupUserFailure = (payload: { isCreatingAccount: boolean; error: string }) => ({
  type: SIGNUP_USER_FAILURE,
  payload,
});

const loginUserStart = (payload: { isLoggingIn: boolean }) => ({
  type: LOGIN_USER_START,
  payload,
});

const loginUserSuccess = (payload: {
  isLoggingIn: boolean;
  accessToken: string;
  refreshToken: string;
  user: UserType;
}) => ({
  type: LOGIN_USER_SUCCESS,
  payload,
});

const loginUserFailure = (payload: { isLoggingIn: boolean; error: string }) => ({
  type: LOGIN_USER_FAILURE,
  payload,
});

const logoutUserStart = (payload: { isLoggingOut: boolean }) => ({
  type: LOGOUT_USER_START,
  payload,
});

const logoutUserSuccess = (payload: { isLoggingOut: boolean }) => ({
  type: LOGOUT_USER_SUCCESS,
  payload,
});

const logoutUserFailure = (payload: { isLoggingOut: boolean }) => ({
  type: LOGOUT_USER_FAILURE,
  payload,
});

// Action Creators
export function doRefreshToken(token: string): ThunkAction<void, StateType, unknown, AnyAction> {
  return async (dispatch) => {
    dispatch(refreshTokenStart());

    return utils
      .refreshToken(token)
      .then((response) => {
        const { user, accessToken } = response;

        dispatch(
          refreshTokenSuccess({
            user,
            accessToken,
          })
        );
      })
      .catch((error) => {
        dispatch(
          refreshTokenFailure({
            error: error.message,
          })
        );
      });
  };
}

export function doSignupUser(userDetails: UserDetailsType): ThunkAction<void, StateType, unknown, AnyAction> {
  return async (dispatch) => {
    toast.success('Creating account', {
      toastId: 'creatingAccount',
      autoClose: false,
    });

    dispatch(
      signupUserStart({
        isCreatingAccount: true,
      })
    );

    return utils
      .signupUser(userDetails)
      .then((response) => {
        dispatch(
          signupUserSuccess({
            isCreatingAccount: false,
            user: response,
          })
        );
        toast.dismiss('creatingAccount');
        toast.success('Account Created');

        const { email, password } = userDetails;
        return dispatch(doLoginUser({ email, password }));
      })
      .catch((error) => {
        dispatch(
          signupUserFailure({
            isCreatingAccount: false,
            error: error.message,
          })
        );
        toast.dismiss('creatingAccount');
        toast.error(`An error occurred. Error: ${error.message}. Please retry`);
      });
  };
}

export function doLoginUser(loginDetails: LoginDetailsType): ThunkAction<void, StateType, unknown, AnyAction> {
  return async (dispatch) => {
    toast.success('Logging in...', {
      toastId: 'loggingIn',
      autoClose: false,
    });

    dispatch(
      loginUserStart({
        isLoggingIn: true,
      })
    );

    return utils
      .loginUser(loginDetails)
      .then((response) => {
        const { user, accessToken, refreshToken } = response;

        dispatch(
          loginUserSuccess({
            user,
            isLoggingIn: false,
            accessToken,
            refreshToken,
          })
        );

        utils.setUserDetails(user, accessToken);

        toast.dismiss('loggingIn');
        toast.success('Successfully Logged In');
      })
      .catch((error) => {
        dispatch(
          loginUserFailure({
            isLoggingIn: false,
            error: error.message,
          })
        );
        toast.dismiss('loggingIn');
        toast.error(`An error occurred. Error: ${error.message}. Please retry`);
      });
  };
}

export function doLogoutUser(): ThunkAction<void, StateType, unknown, AnyAction> {
  return (dispatch) => {
    toast.success('Logging out...', {
      toastId: 'loggingOut',
      autoClose: false,
    });

    dispatch(
      logoutUserStart({
        isLoggingOut: true,
      })
    );

    return utils
      .logoutUser()
      .then(() => {
        dispatch(
          logoutUserSuccess({
            isLoggingOut: false,
          })
        );
        toast.dismiss('loggingOut');
        toast.success('Successfully Logged Out');
      })
      .catch((error) => {
        dispatch(
          logoutUserFailure({
            isLoggingOut: false,
          })
        );
        toast.dismiss('loggingOut');
        toast.error(`An error occurred. Error: ${error.message}. Please retry`);
      });
  };
}
