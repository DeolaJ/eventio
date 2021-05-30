import { createEvent, deleteEvent, updateEvent, setAttendeeStatus } from './event';
import { signupUser, loginUser, logoutUser, refreshToken, setUserDetails } from './auth';
import { fetchAllEvents, fetchEvent } from './fetch';

export default {
  createEvent,
  deleteEvent,
  updateEvent,
  setAttendeeStatus,
  signupUser,
  loginUser,
  logoutUser,
  setUserDetails,
  refreshToken,
  fetchAllEvents,
  fetchEvent,
};
