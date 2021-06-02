import { AnyAction } from 'redux';
import produce from 'immer';

import { EventState } from '../../types';
import {
  FETCH_ALL_EVENTS_START,
  FETCH_ALL_EVENTS_FAILURE,
  FETCH_ALL_EVENTS_SUCCESS,
  FETCH_EVENT_START,
  FETCH_EVENT_FAILURE,
  FETCH_EVENT_SUCCESS,
  SET_EDITING_EVENT,
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

export const defaultState: EventState = {
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
  isEditingEvent: false,
  isUpdatingAttendeeStatus: false,
  isDeletingEvent: false,
};

export default function eventReducer(state = defaultState, action: AnyAction): EventState {
  const { type, payload } = action;

  switch (type) {
    case FETCH_ALL_EVENTS_START:
    case FETCH_ALL_EVENTS_FAILURE:
    case FETCH_ALL_EVENTS_SUCCESS:
    case FETCH_EVENT_START:
    case FETCH_EVENT_FAILURE:
    case SET_EDITING_EVENT:
    case CREATE_EVENT_START:
    case CREATE_EVENT_FAILURE:
    case UPDATE_EVENT_START:
    case UPDATE_EVENT_FAILURE:
    case SET_ATTENDEE_STATUS_START:
    case SET_ATTENDEE_STATUS_FAILURE:
    case DELETE_EVENT_START:
    case DELETE_EVENT_FAILURE: {
      return {
        ...state,
        ...payload,
      };
    }

    case FETCH_EVENT_SUCCESS: {
      const { event: activeEvent, isFetchingEvent } = payload;

      return {
        ...state,
        activeEvent,
        isFetchingEvent,
      };
    }

    case CREATE_EVENT_SUCCESS: {
      const { event, isCreatingEvent } = payload;
      let { events } = state;

      events = produce(events, (draft) => {
        draft.push(event);
      });

      return {
        ...state,
        events,
        isCreatingEvent,
      };
    }

    case UPDATE_EVENT_SUCCESS: {
      const { event, isUpdatingEvent } = payload;
      let { events, activeEvent } = state;

      events = produce(events, (draft) => {
        return draft.map((eventObj) => {
          if (eventObj.id === event.id) {
            return event;
          }
          return eventObj;
        });
      });

      activeEvent = produce(activeEvent, (draft) => {
        return Object.assign(draft, event);
      });

      return {
        ...state,
        events,
        activeEvent,
        isUpdatingEvent,
      };
    }

    case SET_ATTENDEE_STATUS_SUCCESS: {
      const { event, eventId, isUpdatingAttendeeStatus } = payload;
      let { events, activeEvent } = state;

      events = produce(events, (draft) => {
        return draft.map((eventObj) => {
          if (eventObj.id === eventId) {
            return event;
          }
          return eventObj;
        });
      });

      activeEvent = produce(activeEvent, (draft) => {
        draft.attendees = event.attendees;
      });

      // TODO: Attend event if the user is not part of the attendees list and Leave if the user is part of the attendees list

      return {
        ...state,
        events,
        activeEvent,
        isUpdatingAttendeeStatus,
      };
    }

    case DELETE_EVENT_SUCCESS: {
      const { eventId, isDeletingEvent } = payload;
      let { events } = state;

      events = produce(events, (draft) => {
        return draft.filter((eventObj) => eventObj.id !== eventId);
      });

      const activeEvent = {
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
      };
      // TODO: If activeElement is deleted, redirect to all events page

      return {
        ...state,
        events,
        isDeletingEvent,
        activeEvent,
      };
    }

    default: {
      return state;
    }
  }
}
