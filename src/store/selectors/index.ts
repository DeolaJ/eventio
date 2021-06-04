import {
  selectIsAuthenticated,
  selectIsCreatingAccount,
  selectIsLoggingIn,
  selectIsLoggingOut,
  selectUser,
} from './auth';
import {
  selectIsFetchingEvents,
  selectIsFetchingEvent,
  selectIsCreatingEvent,
  selectIsUpdatingEvent,
  selectIsUpdatingAttendeeStatus,
  selectIsDeletingEvent,
  selectAllEvents,
  selectActiveEvent,
  selectEvents,
  selectEventDetails,
  selectIsEditingEvent,
} from './event';
import { selectActiveFormError } from './error';

export default {
  selectIsAuthenticated,
  selectIsCreatingAccount,
  selectIsLoggingIn,
  selectIsLoggingOut,
  selectUser,
  selectIsFetchingEvents,
  selectIsFetchingEvent,
  selectIsCreatingEvent,
  selectIsUpdatingEvent,
  selectIsUpdatingAttendeeStatus,
  selectIsDeletingEvent,
  selectAllEvents,
  selectActiveEvent,
  selectEvents,
  selectEventDetails,
  selectIsEditingEvent,
  selectActiveFormError,
};
