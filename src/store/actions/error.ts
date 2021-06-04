import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { ErrorType, StateType } from '../../types';
import { doLogoutUser } from './auth';
import { SET_ERROR, RESET_ERROR } from './types';

const setError = (payload: { error: ErrorType }) => ({
  type: SET_ERROR,
  payload,
});

const resetError = (): AnyAction => ({
  type: RESET_ERROR,
});

// Action Creators
export function doSetError(error: AxiosError): ThunkAction<void, StateType, unknown, AnyAction> {
  return async (dispatch) => {
    const errorMessage: ErrorType = {
      hasError: true,
      errorFields: [],
      errors: {},
    };
    if (error.response && error.response.data) {
      const {
        response: { data },
      } = error;

      if (data.error === 'Auth.InvalidToken') {
        dispatch(doLogoutUser());
        toast.success('Session expired');
        return;
      }

      if (data.error === 'User.InvalidPassword') {
        errorMessage.errorFields.push('email');
        errorMessage.errorFields.push('password');
        errorMessage.errors.email.message = 'Invalid Email and Password combination';

        dispatch(
          setError({
            error: errorMessage,
          })
        );
        return;
      }

      if (data.error === 'User.Exists') {
        errorMessage.errorFields.push('email');
        errorMessage.errors = {
          ...errorMessage.errors,
          email: {
            message: 'User exists, please sign in',
          },
        };

        dispatch(
          setError({
            error: errorMessage,
          })
        );
        return;
      }

      if (data.errors && data.error.length > 0) {
        const errors = Object.keys(data.errors);
        for (let i = 0; i < errors.length; i += 1) {
          const key = errors[i];
          const message = data.errors[key].message;

          errorMessage.errorFields.push(key);
          errorMessage.errors[key] = message;
        }

        dispatch(
          setError({
            error: errorMessage,
          })
        );
        return;
      }
    }

    dispatch(
      setError({
        error: errorMessage,
      })
    );

    setTimeout(() => {
      dispatch(doResetError());
    }, 6000);
  };
}

export function doResetError(): ThunkAction<void, StateType, unknown, AnyAction> {
  return async (dispatch) => {
    dispatch(resetError());
  };
}
