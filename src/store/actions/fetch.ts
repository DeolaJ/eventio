/* eslint-disable no-undef */
import { toast } from 'react-toastify';
import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';

import utils from '../../utils';
import { EventType, StateType } from '../../types';
import {
  FETCH_ALL_EVENTS_START,
  FETCH_ALL_EVENTS_FAILURE,
  FETCH_ALL_EVENTS_SUCCESS,
  FETCH_EVENT_START,
  FETCH_EVENT_FAILURE,
  FETCH_EVENT_SUCCESS,
} from './types';

const fetchEventStart = (payload: { isFetchingEvent: boolean }) => ({
  type: FETCH_EVENT_START,
  payload,
});

const fetchEventSuccess = (payload: { isFetchingEvent: boolean; event: EventType }) => ({
  type: FETCH_EVENT_SUCCESS,
  payload,
});

const fetchEventFailure = (payload: { isFetchingEvent: boolean }) => ({
  type: FETCH_EVENT_FAILURE,
  payload,
});

const fetchAllEventsStart = (payload: { isFetchingEvents: boolean }) => ({
  type: FETCH_ALL_EVENTS_START,
  payload,
});

const fetchAllEventsSuccess = (payload: { isFetchingEvents: boolean; events: EventType[] }) => ({
  type: FETCH_ALL_EVENTS_SUCCESS,
  payload,
});

const fetchAllEventsFailure = (payload: { isFetchingEvents: boolean }) => ({
  type: FETCH_ALL_EVENTS_FAILURE,
  payload,
});

// Action Creators
export function doFetchAllEvents(): ThunkAction<void, StateType, unknown, AnyAction> {
  return async (dispatch) => {
    toast.success('Loading events...', {
      toastId: 'loadingEvents',
      autoClose: false,
    });

    dispatch(
      fetchAllEventsStart({
        isFetchingEvents: true,
      })
    );

    return utils
      .fetchAllEvents()
      .then((response) => {
        dispatch(
          fetchAllEventsSuccess({
            events: response,
            isFetchingEvents: false,
          })
        );
        toast.dismiss('loadingEvents');
        toast.success('Events loaded');
      })
      .catch((error) => {
        dispatch(
          fetchAllEventsFailure({
            isFetchingEvents: false,
          })
        );
        toast.dismiss('loadingEvents');
        toast.error(`Error: ${error.message}. Please reload the page`);
      });
  };
}

export function doFetchEvent(id: string): ThunkAction<void, StateType, unknown, AnyAction> {
  return async (dispatch) => {
    toast.success('Loading event...', {
      toastId: 'loadingEvent',
      autoClose: false,
    });

    dispatch(
      fetchEventStart({
        isFetchingEvent: true,
      })
    );

    return utils
      .fetchEvent(id)
      .then((response) => {
        dispatch(
          fetchEventSuccess({
            event: response,
            isFetchingEvent: false,
          })
        );
        toast.dismiss('loadingEvent');
        toast.success('Event loaded');
      })
      .catch((error) => {
        dispatch(
          fetchEventFailure({
            isFetchingEvent: false,
          })
        );
        toast.dismiss('loadingEvent');
        toast.error(`Error: ${error.message}. Please reload the page`);
      });
  };
}
