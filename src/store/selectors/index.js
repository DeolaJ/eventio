import { selectIsAuthenticated, selectIsCreatingAccount, selectIsLoggingIn, selectIsLoggingOut } from './auth';
import {
  selectIsFetchingEvents,
  selectIsFetchingEvent,
  selectIsCreatingEvent,
  selectIsUpdatingEvent,
  selectIsUpdatingAttendeeStatus,
  selectIsDeletingEvent,
  selectAllEvents,
  selectActiveEvent,
} from './event';

export default {
  selectIsAuthenticated,
  selectIsCreatingAccount,
  selectIsLoggingIn,
  selectIsLoggingOut,
  selectIsFetchingEvents,
  selectIsFetchingEvent,
  selectIsCreatingEvent,
  selectIsUpdatingEvent,
  selectIsUpdatingAttendeeStatus,
  selectIsDeletingEvent,
  selectAllEvents,
  selectActiveEvent,
};
