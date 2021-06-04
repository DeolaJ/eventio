import { AnyAction } from 'redux';

import { ErrorState } from '../../types';
import { SET_ERROR, RESET_ERROR } from '../actions/types';

export const defaultState: ErrorState = {
  error: {
    hasError: false,
    errors: {},
    errorFields: [],
  },
};

export default function authReducer(state = defaultState, action: AnyAction): ErrorState {
  const { type, payload } = action;

  switch (type) {
    case SET_ERROR: {
      return {
        ...state,
        ...payload,
      };
    }

    case RESET_ERROR: {
      return {
        ...state,
        error: {
          hasError: false,
          errors: {},
          errorFields: [],
        },
      };
    }

    default: {
      return state;
    }
  }
}
