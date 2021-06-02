import { doCreateEvent, doDeleteEvent, doUpdateEvent, doSetAttendeeStatus, doSetEditingEvent } from './event';
import { doSignupUser, doLoginUser, doLogoutUser, doRefreshToken } from './auth';
import { doFetchAllEvents, doFetchEvent } from './fetch';

export default {
  doCreateEvent,
  doDeleteEvent,
  doUpdateEvent,
  doSetAttendeeStatus,
  doSignupUser,
  doLoginUser,
  doLogoutUser,
  doRefreshToken,
  doFetchAllEvents,
  doFetchEvent,
  doSetEditingEvent,
};
