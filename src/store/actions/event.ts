/* eslint-disable no-undef */
import { toast } from 'react-toastify';
import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';

import utils from '../../utils';
import { EventType, EventDetailsType, StateType } from '../../types';
import {
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
} from './types';

const createEventStart = (payload: { isCreatingEvent: boolean }) => ({
  type: CREATE_EVENT_START,
  payload,
});

export const createEventSuccess = (payload: { isCreatingEvent: boolean; event: EventType }): AnyAction => ({
  type: CREATE_EVENT_SUCCESS,
  payload,
});

const createEventFailure = (payload: { isCreatingEvent: boolean; error: string }) => ({
  type: CREATE_EVENT_FAILURE,
  payload,
});

const updateEventStart = (payload: { isUpdatingEvent: boolean }) => ({
  type: UPDATE_EVENT_START,
  payload,
});

export const updateEventSuccess = (payload: { isUpdatingEvent: boolean; event: EventType }): AnyAction => ({
  type: UPDATE_EVENT_SUCCESS,
  payload,
});

const updateEventFailure = (payload: { isUpdatingEvent: boolean; error: string }) => ({
  type: UPDATE_EVENT_FAILURE,
  payload,
});

const setAttendeeStatusStart = (payload: { isUpdatingAttendeeStatus: boolean }) => ({
  type: SET_ATTENDEE_STATUS_START,
  payload,
});

export const setAttendeeStatusSuccess = (payload: {
  isUpdatingAttendeeStatus: boolean;
  eventId: string;
  event: EventType;
}): AnyAction => ({
  type: SET_ATTENDEE_STATUS_SUCCESS,
  payload,
});

const setAttendeeStatusFailure = (payload: { isUpdatingAttendeeStatus: boolean; error: string }) => ({
  type: SET_ATTENDEE_STATUS_FAILURE,
  payload,
});

const deleteEventStart = (payload: { isDeletingEvent: boolean }) => ({
  type: DELETE_EVENT_START,
  payload,
});

export const deleteEventSuccess = (payload: { isDeletingEvent: boolean; eventId: string }): AnyAction => ({
  type: DELETE_EVENT_SUCCESS,
  payload,
});

const deleteEventFailure = (payload: { isDeletingEvent: boolean }) => ({
  type: DELETE_EVENT_FAILURE,
  payload,
});

// Action Creators
// TODO: Improve Error Reporting to show the correct errors in the notification banner
export function doCreateEvent(eventDetails: EventDetailsType): ThunkAction<void, StateType, unknown, AnyAction> {
  return async (dispatch, getState) => {
    const { accessToken } = getState().auth;

    toast.success('Creating event', {
      toastId: 'creatingEvent',
      autoClose: false,
    });

    dispatch(
      createEventStart({
        isCreatingEvent: true,
      })
    );

    return utils
      .createEvent(eventDetails, accessToken)
      .then((response) => {
        dispatch(
          createEventSuccess({
            isCreatingEvent: false,
            event: response,
          })
        );
        toast.dismiss('creatingEvent');
        toast.success('Event Created');
      })
      .catch((error) => {
        dispatch(
          createEventFailure({
            error: error.message,
            isCreatingEvent: false,
          })
        );
        toast.dismiss('creatingEvent');
        toast.error(`An error occurred. Error: ${error.message}. Please retry`);
      });
  };
}

export function doUpdateEvent(
  id: string,
  eventDetails: EventDetailsType
): ThunkAction<void, StateType, unknown, AnyAction> {
  return async (dispatch, getState) => {
    const { accessToken } = getState().auth;

    toast.success('Updating event', {
      toastId: 'updatingEvent',
      autoClose: false,
    });

    dispatch(
      updateEventStart({
        isUpdatingEvent: true,
      })
    );

    return utils
      .updateEvent(id, eventDetails, accessToken)
      .then((response) => {
        dispatch(
          updateEventSuccess({
            isUpdatingEvent: false,
            event: response,
          })
        );
        toast.dismiss('updatingEvent');
        toast.success('Event Updated');
      })
      .catch((error) => {
        dispatch(
          updateEventFailure({
            isUpdatingEvent: false,
            error: error.message,
          })
        );
        toast.dismiss('updatingEvent');
        toast.error(`An error occurred. Error: ${error.message}. Please retry`);
      });
  };
}

export function doSetAttendeeStatus(id: string, status: boolean): ThunkAction<void, StateType, unknown, AnyAction> {
  return async (dispatch, getState) => {
    const { accessToken } = getState().auth;

    toast.success('Updating event status...', {
      toastId: 'updatingEventStatus',
      autoClose: false,
    });

    dispatch(
      setAttendeeStatusStart({
        isUpdatingAttendeeStatus: true,
      })
    );

    return utils
      .setAttendeeStatus(id, status, accessToken)
      .then((response) => {
        dispatch(
          setAttendeeStatusSuccess({
            eventId: id,
            event: response,
            isUpdatingAttendeeStatus: false,
          })
        );
        toast.dismiss('updatingEventStatus');
        toast.success('Event Status Updated');
      })
      .catch((error) => {
        dispatch(
          setAttendeeStatusFailure({
            isUpdatingAttendeeStatus: false,
            error: error.message,
          })
        );
        toast.dismiss('updatingEventStatus');
        toast.error(`An error occurred. Error: ${error.message}. Please retry`);
      });
  };
}

export function doDeleteEvent(id: string): ThunkAction<void, StateType, unknown, AnyAction> {
  return async (dispatch, getState) => {
    const { accessToken } = getState().auth;

    toast.success('Deleting Event...', {
      toastId: 'deletingEvent',
      autoClose: false,
    });

    dispatch(
      deleteEventStart({
        isDeletingEvent: true,
      })
    );

    return utils
      .deleteEvent(id, accessToken)
      .then((response) => {
        const { deleted } = response;

        toast.dismiss('deletingEvent');

        if (deleted) {
          dispatch(
            deleteEventSuccess({
              eventId: id,
              isDeletingEvent: false,
            })
          );
          toast.success('Event Deleted');
        } else {
          dispatch(
            deleteEventFailure({
              isDeletingEvent: false,
            })
          );
          toast.error(`An error occurred. Please retry`);
        }
      })
      .catch((error) => {
        dispatch(
          deleteEventFailure({
            isDeletingEvent: false,
          })
        );
        toast.dismiss('deletingEvent');
        toast.error(`An error occurred. Error: ${error.message}. Please retry`);
      });
  };
}
