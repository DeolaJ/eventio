import { StateType, EventType } from '../../types';

export const selectIsFetchingEvents = (state: StateType): boolean => state.event.isFetchingEvents;

export const selectIsFetchingEvent = (state: StateType): boolean => state.event.isFetchingEvent;

export const selectIsCreatingEvent = (state: StateType): boolean => state.event.isCreatingEvent;

export const selectIsUpdatingEvent = (state: StateType): boolean => state.event.isUpdatingEvent;

export const selectIsUpdatingAttendeeStatus = (state: StateType): boolean => state.event.isUpdatingAttendeeStatus;

export const selectIsDeletingEvent = (state: StateType): boolean => state.event.isDeletingEvent;

export const selectAllEvents = (state: StateType): EventType[] => state.event.events;

export const selectActiveEvent = (state: StateType): EventType => state.event.activeEvent;
