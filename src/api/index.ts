import { createEventAPI, deleteEventAPI, updateEventAPI, setAttendeeStatusAPI } from './event';
import { signupUserAPI, loginUserAPI, refreshTokenAPI } from './auth';
import { fetchAllEventsAPI, fetchEventAPI } from './fetch';

export default {
  createEventAPI,
  deleteEventAPI,
  updateEventAPI,
  setAttendeeStatusAPI,
  signupUserAPI,
  loginUserAPI,
  refreshTokenAPI,
  fetchAllEventsAPI,
  fetchEventAPI,
};
