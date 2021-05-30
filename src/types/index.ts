//==============================================================================
// State
//==============================================================================

export type AuthState = {
  user: UserType;
  accessToken: string;
  refreshToken: string;
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
  isUpdatingAttendeeStatus: boolean;
  isDeletingEvent: boolean;
};

export type StateType = {
  auth: AuthState;
  event: EventState;
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
