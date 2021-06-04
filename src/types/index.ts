//==============================================================================
// State
//==============================================================================

export type AuthState = {
  user: UserType;
  isAuthenticated: boolean;
  isCreatingAccount: boolean;
  isLoggingIn: boolean;
  isLoggingOut: boolean;
};

export type EventState = {
  events: EventType[];
  activeEvent: EventType;
  isFetchingEvent: boolean;
  isFetchingEvents: boolean;
  isCreatingEvent: boolean;
  isUpdatingEvent: boolean;
  isEditingEvent: boolean;
  isUpdatingAttendeeStatus: {
    loading: boolean;
    eventId: string;
  };
  isDeletingEvent: boolean;
};

export type ErrorState = {
  error: ErrorType;
};

export type StateType = {
  auth: AuthState;
  event: EventState;
  formError: ErrorState;
};

//==============================================================================
// Editing Details
//==============================================================================

export type UserDetailsType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type LoginDetailsType = {
  email: string;
  password: string;
};

export type EventDetailsType = {
  title: string;
  description: string;
  startsAt: string;
  capacity: number;
};

//==============================================================================
// Major Instances
//==============================================================================

export type UserType = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: string;
  updatedAt: string;
};

export type EventType = {
  id: string;
  title: string;
  description: string;
  startsAt: string;
  capacity: number;
  owner: UserType;
  attendees: UserType[];
  createdAt: string;
  updatedAt: string;
};

export type ErrorType = {
  hasError: boolean;
  errors: {
    [key: string]: {
      message: string;
    };
  };
  errorFields: string[];
};

//==============================================================================
// General Instances
//==============================================================================

export type EventTabValueProps = 'allEvents' | 'futureEvents' | 'pastEvents';

export type EventTabsProps = {
  text: string;
  value: EventTabValueProps;
};

export type ActiveFormErrorType = {
  hasError: boolean;
  errorMessages: {
    [key: string]: string;
  };
  errorFields: string[];
};
