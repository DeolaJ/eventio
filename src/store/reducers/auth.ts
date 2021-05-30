import { AnyAction } from 'redux';

import { AuthState } from '../../types';
import {
  SIGNUP_USER_START,
  SIGNUP_USER_FAILURE,
  SIGNUP_USER_SUCCESS,
  LOGIN_USER_START,
  LOGIN_USER_FAILURE,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER_START,
  LOGOUT_USER_FAILURE,
  LOGOUT_USER_SUCCESS,
} from '../actions/types';

export const defaultState = {
  user: {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    createdAt: '',
    updatedAt: '',
  },
  accessToken: '',
  refreshToken: '',
  isAuthenticated: false,
  isCreatingAccount: false,
  isLoggingIn: false,
  isLoggingOut: false,
};

export default function authReducer(state = defaultState, action: AnyAction): AuthState {
  const { type, payload } = action;

  switch (type) {
    case SIGNUP_USER_START:
    case SIGNUP_USER_FAILURE:
    case SIGNUP_USER_SUCCESS:
    case LOGIN_USER_START:
    case LOGIN_USER_FAILURE:
    case LOGIN_USER_SUCCESS:
    case LOGOUT_USER_START:
    case LOGOUT_USER_FAILURE:
    case LOGOUT_USER_SUCCESS: {
      return {
        ...state,
        ...payload,
      };
    }

    default: {
      return state;
    }
  }
}
