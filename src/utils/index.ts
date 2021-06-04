import { createEvent, deleteEvent, updateEvent, setAttendeeStatus } from './event';
import { signupUser, loginUser, logoutUser, refreshToken, setUserDetails, loadUserDetails } from './auth';
import { fetchAllEvents, fetchEvent } from './fetch';
import { generateTotalMessage, getCurrentTime, setCurrentDate, formatDate } from './helpers';

export default {
  createEvent,
  deleteEvent,
  updateEvent,
  setAttendeeStatus,
  signupUser,
  loginUser,
  logoutUser,
  setUserDetails,
  loadUserDetails,
  refreshToken,
  fetchAllEvents,
  fetchEvent,
  generateTotalMessage,
  getCurrentTime,
  setCurrentDate,
  formatDate,
};
