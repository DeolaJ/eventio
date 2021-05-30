import { AnyAction } from 'redux';

import { EventState } from '../../types';
import {
  FETCH_ALL_EVENTS_START,
  FETCH_ALL_EVENTS_FAILURE,
  FETCH_ALL_EVENTS_SUCCESS,
  FETCH_EVENT_START,
  FETCH_EVENT_FAILURE,
  FETCH_EVENT_SUCCESS,
  CREATE_EVENT_START,
  CREATE_EVENT_FAILURE,
  CREATE_EVENT_SUCCESS,
  UPDATE_EVENT_START,
  UPDATE_EVENT_FAILURE,
  UPDATE_EVENT_SUCCESS,
  SET_ATTENDEE_STATUS_START,
  SET_ATTENDEE_STATUS_FAILURE,
  SET_ATTENDEE_STATUS_SUCCESS,
  DELETE_EVENT_START,
  DELETE_EVENT_FAILURE,
  DELETE_EVENT_SUCCESS,
} from '../actions/types';

export const defaultState = {
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
  isFetchingEvent: false,
  isFetchingEvents: false,
  isCreatingEvent: false,
  isUpdatingEvent: false,
  isUpdatingAttendeeStatus: false,
  isDeletingEvent: false,
};

export default function authReducer(state = defaultState, action: AnyAction): EventState {
  const { type, payload } = action;

  switch (type) {
    case FETCH_ALL_EVENTS_START:
    case FETCH_ALL_EVENTS_FAILURE:
    case FETCH_ALL_EVENTS_SUCCESS:
    case FETCH_EVENT_START:
    case FETCH_EVENT_FAILURE:
    case FETCH_EVENT_SUCCESS:
    case CREATE_EVENT_START:
    case CREATE_EVENT_FAILURE:
    case CREATE_EVENT_SUCCESS:
    case UPDATE_EVENT_START:
    case UPDATE_EVENT_FAILURE:
    case UPDATE_EVENT_SUCCESS:
    case SET_ATTENDEE_STATUS_START:
    case SET_ATTENDEE_STATUS_FAILURE:
    case SET_ATTENDEE_STATUS_SUCCESS:
    case DELETE_EVENT_START:
    case DELETE_EVENT_FAILURE:
    case DELETE_EVENT_SUCCESS: {
      return {
        ...state,
        ...payload,
      };
    }

    default: {
      return state;
    }
  }
}
