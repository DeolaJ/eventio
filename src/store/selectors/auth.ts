import { StateType } from '../../types';

export const selectIsAuthenticated = (state: StateType): boolean => state.auth.isAuthenticated;

export const selectIsCreatingAccount = (state: StateType): boolean => state.auth.isCreatingAccount;

export const selectIsLoggingIn = (state: StateType): boolean => state.auth.isLoggingIn;

export const selectIsLoggingOut = (state: StateType): boolean => state.auth.isLoggingOut;
