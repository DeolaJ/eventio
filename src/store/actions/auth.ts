/* eslint-disable no-undef */
import { toast } from 'react-toastify';
import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { doSetError } from './error';
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

const refreshTokenSuccess = (payload: { user: UserType }) => ({
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

export const signupUserSuccess = (payload: {
  isCreatingAccount: boolean;
  user: UserType;
  isAuthenticated: boolean;
}): AnyAction => ({
  type: SIGNUP_USER_SUCCESS,
  payload,
});

const signupUserFailure = (payload: { isCreatingAccount: boolean }) => ({
  type: SIGNUP_USER_FAILURE,
  payload,
});

const loginUserStart = (payload: { isLoggingIn: boolean }) => ({
  type: LOGIN_USER_START,
  payload,
});

export const loginUserSuccess = (payload: {
  isLoggingIn: boolean;
  user: UserType;
  isAuthenticated: boolean;
}): AnyAction => ({
  type: LOGIN_USER_SUCCESS,
  payload,
});

const loginUserFailure = (payload: { isLoggingIn: boolean }) => ({
  type: LOGIN_USER_FAILURE,
  payload,
});

const logoutUserStart = (payload: { isLoggingOut: boolean }) => ({
  type: LOGOUT_USER_START,
  payload,
});

export const logoutUserSuccess = (payload: {
  isLoggingOut: boolean;
  isAuthenticated: boolean;
  user: UserType;
}): AnyAction => ({
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
        const { user } = response;

        dispatch(
          refreshTokenSuccess({
            user,
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
    const toastId = toast.success('Creating account', {
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
            isAuthenticated: true,
          })
        );

        toast.update(toastId, {
          render: 'Account Created',
          type: toast.TYPE.SUCCESS,
          autoClose: 2500,
        });
        toast.dismiss(toastId);

        // Login User
        if (response) {
          const { email, password } = userDetails;
          return dispatch(doLoginUser({ email, password }));
        }
      })
      .catch((error) => {
        dispatch(
          signupUserFailure({
            isCreatingAccount: false,
          })
        );

        dispatch(doSetError(error));

        toast.update(toastId, {
          render: 'An error occurred. Please retry',
          type: toast.TYPE.ERROR,
          autoClose: 2500,
        });
        toast.dismiss(toastId);
      });
  };
}

export function doLoginUser(loginDetails: LoginDetailsType): ThunkAction<void, StateType, unknown, AnyAction> {
  return async (dispatch) => {
    const toastId = toast.success('Logging in...', {
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
        const { user } = response;

        dispatch(
          loginUserSuccess({
            user,
            isLoggingIn: false,
            isAuthenticated: true,
          })
        );

        // Set user in localstorage
        utils.setUserDetails(user);

        toast.update(toastId, {
          render: 'Successfully logged in',
          type: toast.TYPE.SUCCESS,
          autoClose: 2500,
        });
        toast.dismiss(toastId);
      })
      .catch((error) => {
        dispatch(
          loginUserFailure({
            isLoggingIn: false,
          })
        );
        dispatch(doSetError(error));

        toast.update(toastId, {
          render: 'An error occurred. Please retry',
          type: toast.TYPE.ERROR,
          autoClose: 2500,
        });
        toast.dismiss(toastId);
      });
  };
}

export function doLogoutUser(): ThunkAction<void, StateType, unknown, AnyAction> {
  return async (dispatch) => {
    const toastId = toast.success('Logging out...', {
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
            isAuthenticated: false,
            user: {
              id: '',
              firstName: '',
              lastName: '',
              email: '',
              createdAt: '',
              updatedAt: '',
            },
          })
        );

        toast.update(toastId, {
          render: 'Successfully Logged Out',
          type: toast.TYPE.SUCCESS,
          autoClose: 2500,
        });
        toast.dismiss(toastId);
      })
      .catch(() => {
        dispatch(
          logoutUserFailure({
            isLoggingOut: false,
          })
        );

        toast.update(toastId, {
          render: 'An error occurred. Please retry',
          type: toast.TYPE.ERROR,
          autoClose: 2500,
        });
        toast.dismiss(toastId);
      });
  };
}
