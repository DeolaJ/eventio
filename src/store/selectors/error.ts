import { createSelector } from 'reselect';
import { StateType, ErrorType, ActiveFormErrorType } from '../../types';

export const selectError = (state: StateType): ErrorType => state.formError.error;

export const selectActiveFormError = createSelector([selectError], (error) => {
  const activeFormError: ActiveFormErrorType = {
    hasError: error.hasError,
    errorMessages: {},
    errorFields: error.errorFields,
  };

  const errorKeys = Object.keys(error.errors);

  for (let i = 0; i < errorKeys.length; i += 1) {
    const fieldKey = errorKeys[i];
    const errorMessage = error.errors[fieldKey];
    activeFormError.errorMessages[fieldKey] = errorMessage.message;
  }

  return activeFormError;
});
