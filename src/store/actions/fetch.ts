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

export const fetchEventSuccess = (payload: { isFetchingEvent: boolean; event: EventType }): AnyAction => ({
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

export const fetchAllEventsSuccess = (payload: { isFetchingEvents: boolean; events: EventType[] }): AnyAction => ({
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
    const toastId = toast.success('Loading events...', {
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

        toast.update(toastId, {
          render: 'Events Loaded',
          type: toast.TYPE.SUCCESS,
          autoClose: 2500,
        });
        toast.dismiss(toastId);
      })
      .catch(() => {
        dispatch(
          fetchAllEventsFailure({
            isFetchingEvents: false,
          })
        );

        toast.update(toastId, {
          render: 'An error occurred. Please reload the page',
          type: toast.TYPE.ERROR,
          autoClose: 2500,
        });
        toast.dismiss(toastId);
      });
  };
}

export function doFetchEvent(id: string): ThunkAction<void, StateType, unknown, AnyAction> {
  return async (dispatch) => {
    const toastId = toast.success('Loading event...', {
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

        toast.update(toastId, {
          render: 'Event Loaded',
          type: toast.TYPE.SUCCESS,
          autoClose: 2500,
        });
        toast.dismiss(toastId);
      })
      .catch(() => {
        dispatch(
          fetchEventFailure({
            isFetchingEvent: false,
          })
        );

        toast.update(toastId, {
          render: 'An error occurred. Please reload the page',
          type: toast.TYPE.ERROR,
          autoClose: 2500,
        });
        toast.dismiss(toastId);
      });
  };
}
