import reducer, { defaultState } from '../auth';
import { signupUserSuccess, loginUserSuccess, logoutUserSuccess } from '../../actions/auth';

describe('Auth Reducers', () => {
  it('should return the initial state', () => {
    expect(reducer(defaultState, { type: '' })).toEqual({
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
    });
  });

  it('should handle SIGNUP_USER_SUCCESS', () => {
    expect(
      reducer(
        defaultState,
        signupUserSuccess({
          isCreatingAccount: false,
          user: {
            id: '58493e0b691ecc0d3da51bfe',
            firstName: 'Robert',
            lastName: 'Rossmann',
            email: 'robert.rossmann@strv.com',
            createdAt: '2016-12-08T10:46:33.901Z',
            updatedAt: '2016-12-08T10:46:33.901Z',
          },
          isAuthenticated: true,
        })
      )
    ).toEqual({
      user: {
        id: '58493e0b691ecc0d3da51bfe',
        firstName: 'Robert',
        lastName: 'Rossmann',
        email: 'robert.rossmann@strv.com',
        createdAt: '2016-12-08T10:46:33.901Z',
        updatedAt: '2016-12-08T10:46:33.901Z',
      },
      accessToken: '',
      refreshToken: '',
      isAuthenticated: true,
      isCreatingAccount: false,
      isLoggingIn: false,
      isLoggingOut: false,
    });
  });

  it('should handle LOGIN_USER_SUCCESS', () => {
    expect(
      reducer(
        defaultState,
        loginUserSuccess({
          isLoggingIn: false,
          user: {
            id: '58493e0b691ecc0d3da51bfe',
            firstName: 'Robert',
            lastName: 'Rossmann',
            email: 'robert.rossmann@strv.com',
            createdAt: '2016-12-08T10:46:33.901Z',
            updatedAt: '2016-12-08T10:46:33.901Z',
          },
          accessToken: 'eeeeee',
          refreshToken: 'eeeeee',
          isAuthenticated: true,
        })
      )
    ).toEqual({
      user: {
        id: '58493e0b691ecc0d3da51bfe',
        firstName: 'Robert',
        lastName: 'Rossmann',
        email: 'robert.rossmann@strv.com',
        createdAt: '2016-12-08T10:46:33.901Z',
        updatedAt: '2016-12-08T10:46:33.901Z',
      },
      accessToken: 'eeeeee',
      refreshToken: 'eeeeee',
      isAuthenticated: true,
      isCreatingAccount: false,
      isLoggingIn: false,
      isLoggingOut: false,
    });
  });

  it('should handle LOGOUT_USER_SUCCESS', () => {
    expect(
      reducer(
        undefined,
        logoutUserSuccess({
          isLoggingOut: false,
          isAuthenticated: false,
          accessToken: '',
          refreshToken: '',
          user: {
            id: '',
            firstName: '',
            lastName: '',
            email: '',
            createdAt: '',
            updatedAt: '',
          },
        })
      )
    ).toEqual(defaultState);
  });
});
