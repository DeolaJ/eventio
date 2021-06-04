/* eslint-disable no-undef */
import { toast } from 'react-toastify';
import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RouteComponentProps } from 'react-router-dom';

import { doSetError } from './error';
import utils from '../../utils';
import { EventType, EventDetailsType, StateType } from '../../types';
import {
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
} from './types';

const setEditingEvent = (payload: { isEditingEvent: boolean }) => ({
  type: SET_EDITING_EVENT,
  payload,
});

const createEventStart = (payload: { isCreatingEvent: boolean }) => ({
  type: CREATE_EVENT_START,
  payload,
});

export const createEventSuccess = (payload: { isCreatingEvent: boolean; event: EventType }): AnyAction => ({
  type: CREATE_EVENT_SUCCESS,
  payload,
});

const createEventFailure = (payload: { isCreatingEvent: boolean }) => ({
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

const updateEventFailure = (payload: { isUpdatingEvent: boolean }) => ({
  type: UPDATE_EVENT_FAILURE,
  payload,
});

const setAttendeeStatusStart = (payload: { isUpdatingAttendeeStatus: { loading: boolean; eventId: string } }) => ({
  type: SET_ATTENDEE_STATUS_START,
  payload,
});

export const setAttendeeStatusSuccess = (payload: {
  isUpdatingAttendeeStatus: { loading: boolean; eventId: string };
  eventId: string;
  event: EventType;
}): AnyAction => ({
  type: SET_ATTENDEE_STATUS_SUCCESS,
  payload,
});

const setAttendeeStatusFailure = (payload: { isUpdatingAttendeeStatus: { loading: boolean; eventId: string } }) => ({
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
export function doSetEditingEvent(isEditingEvent: boolean): ThunkAction<void, StateType, unknown, AnyAction> {
  return async (dispatch) => {
    dispatch(setEditingEvent({ isEditingEvent }));
  };
}

export function doCreateEvent(
  eventDetails: EventDetailsType,
  history: RouteComponentProps['history']
): ThunkAction<void, StateType, unknown, AnyAction> {
  return async (dispatch) => {
    const toastId = toast.success('Creating event', {
      toastId: 'creatingEvent',
      autoClose: false,
    });

    dispatch(
      createEventStart({
        isCreatingEvent: true,
      })
    );

    return utils
      .createEvent(eventDetails)
      .then((response) => {
        dispatch(
          createEventSuccess({
            isCreatingEvent: false,
            event: response,
          })
        );
        toast.update(toastId, {
          render: 'Event Created',
          type: toast.TYPE.SUCCESS,
          autoClose: 2500,
        });
        toast.dismiss(toastId);

        dispatch(doSetEditingEvent(false));
        history.push(`/event/${response.id}`);
      })
      .catch((error) => {
        dispatch(
          createEventFailure({
            isCreatingEvent: false,
          })
        );
        dispatch(doSetError(error));
        toast.update(toastId, {
          render: 'An error occurred. Please retry',
          type: toast.TYPE.ERROR,
          autoClose: 2500,
        });
        toast.dismiss(toastId);
      });
  };
}

export function doUpdateEvent(
  id: string,
  eventDetails: EventDetailsType
): ThunkAction<void, StateType, unknown, AnyAction> {
  return async (dispatch) => {
    const toastId = toast.success('Updating event', {
      toastId: 'updatingEvent',
      autoClose: false,
    });

    dispatch(
      updateEventStart({
        isUpdatingEvent: true,
      })
    );

    return utils
      .updateEvent(id, eventDetails)
      .then((response) => {
        dispatch(
          updateEventSuccess({
            isUpdatingEvent: false,
            event: response,
          })
        );
        toast.update(toastId, {
          render: 'Event Updated',
          type: toast.TYPE.SUCCESS,
          autoClose: 2500,
        });
        toast.dismiss(toastId);
        dispatch(doSetEditingEvent(false));
      })
      .catch((error) => {
        dispatch(
          updateEventFailure({
            isUpdatingEvent: false,
          })
        );
        dispatch(doSetError(error));
        toast.update(toastId, {
          render: 'An error occurred. Please retry',
          type: toast.TYPE.ERROR,
          autoClose: 2500,
        });
        toast.dismiss(toastId);
      });
  };
}

export function doSetAttendeeStatus(id: string, status: boolean): ThunkAction<void, StateType, unknown, AnyAction> {
  return async (dispatch) => {
    const toastId = toast.success('Updating event status...', {
      toastId: 'updatingEventStatus',
      autoClose: false,
    });

    dispatch(
      setAttendeeStatusStart({
        isUpdatingAttendeeStatus: { loading: true, eventId: id },
      })
    );

    return utils
      .setAttendeeStatus(id, status)
      .then((response) => {
        dispatch(
          setAttendeeStatusSuccess({
            eventId: id,
            event: response,
            isUpdatingAttendeeStatus: { loading: false, eventId: '' },
          })
        );
        toast.update(toastId, {
          render: 'Event Status Updated',
          type: toast.TYPE.SUCCESS,
          autoClose: 2500,
        });
        toast.dismiss(toastId);
      })
      .catch(() => {
        dispatch(
          setAttendeeStatusFailure({
            isUpdatingAttendeeStatus: { loading: false, eventId: '' },
          })
        );
        toast.update(toastId, {
          render: 'An error occurred. Please retry',
          type: toast.TYPE.ERROR,
          autoClose: 2500,
        });
        toast.dismiss(toastId);
      });
  };
}

export function doDeleteEvent(
  id: string,
  history: RouteComponentProps['history']
): ThunkAction<void, StateType, unknown, AnyAction> {
  return async (dispatch) => {
    const toastId = toast.success('Deleting Event...', {
      toastId: 'deletingEvent',
      autoClose: false,
    });

    dispatch(
      deleteEventStart({
        isDeletingEvent: true,
      })
    );

    return utils
      .deleteEvent(id)
      .then((response) => {
        const { deleted } = response;

        toast.dismiss();

        if (deleted) {
          dispatch(
            deleteEventSuccess({
              eventId: id,
              isDeletingEvent: false,
            })
          );
          toast.update(toastId, {
            render: 'Event Deleted',
            type: toast.TYPE.SUCCESS,
            autoClose: 2500,
          });
          toast.dismiss(toastId);
          history.push('/dashboard');
        } else {
          dispatch(
            deleteEventFailure({
              isDeletingEvent: false,
            })
          );
          toast.update(toastId, {
            render: 'An error occurred. Please retry',
            type: toast.TYPE.ERROR,
            autoClose: 2500,
          });
          toast.dismiss(toastId);
        }
      })
      .catch(() => {
        dispatch(
          deleteEventFailure({
            isDeletingEvent: false,
          })
        );
        toast.update(toastId, {
          render: 'An error occurred. Please retry',
          type: toast.TYPE.ERROR,
          autoClose: 2500,
        });
        toast.dismiss(toastId);
      });
  };
}
