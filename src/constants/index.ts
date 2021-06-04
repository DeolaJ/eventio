import { StateType } from '../types';
import { loadUserDetails, checkAuth } from '../utils/auth';

export const initialState: StateType = {
  auth: {
    user: {
      id: '',
      firstName: '',
      lastName: '',
      email: '',
      createdAt: '',
      updatedAt: '',
    },
    isAuthenticated: false,
    isCreatingAccount: false,
    isLoggingIn: false,
    isLoggingOut: false,
  },
  event: {
    events: [],
    activeEvent: {
      id: '',
      title: '',
      description: '',
      startsAt: '',
      capacity: 0,
      owner: {
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        createdAt: '',
        updatedAt: '',
      },
      attendees: [],
      createdAt: '',
      updatedAt: '',
    },
    isFetchingEvent: true,
    isFetchingEvents: true,
    isCreatingEvent: false,
    isUpdatingEvent: false,
    isEditingEvent: false,
    isUpdatingAttendeeStatus: {
      loading: false,
      eventId: '',
    },
    isDeletingEvent: false,
  },
  formError: {
    error: {
      hasError: false,
      errors: {},
      errorFields: [],
    },
  },
};

// Load state from localStorage if it exists
export const persistedState: StateType = {
  auth: {
    ...initialState.auth,
    ...loadUserDetails(),
    isAuthenticated: checkAuth(),
  },
  event: initialState.event,
  formError: initialState.formError,
};

export const UserDetailsObj = {
  firstName: 'First Name',
  lastName: 'Last Name',
  email: 'Email',
  password: 'Password',
};

export const LoginDetailsObj = {
  email: 'Email',
  password: 'Password',
};

export const EventDetailsObj = {
  title: 'Title',
  description: 'Description',
  startsAt: 'Date and Time',
  capacity: 'Capacity',
};

export const errorMessageObj = {
  userDetails: UserDetailsObj,
  eventDetails: EventDetailsObj,
  loginDetails: LoginDetailsObj,
};
