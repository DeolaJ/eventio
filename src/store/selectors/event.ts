import { createSelector } from 'reselect';

import { StateType, EventType } from '../../types';

type EventsListProps = {
  allEvents: EventType[];
  futureEvents: EventType[];
  pastEvents: EventType[];
};

export const selectIsFetchingEvents = (state: StateType): boolean => state.event.isFetchingEvents;

export const selectIsFetchingEvent = (state: StateType): boolean => state.event.isFetchingEvent;

export const selectIsCreatingEvent = (state: StateType): boolean => state.event.isCreatingEvent;

export const selectIsUpdatingEvent = (state: StateType): boolean => state.event.isUpdatingEvent;

export const selectIsEditingEvent = (state: StateType): boolean => state.event.isEditingEvent;

export const selectIsUpdatingAttendeeStatus = (state: StateType): boolean => state.event.isUpdatingAttendeeStatus;

export const selectIsDeletingEvent = (state: StateType): boolean => state.event.isDeletingEvent;

export const selectAllEvents = (state: StateType): EventType[] => state.event.events;

export const selectActiveEvent = (state: StateType): EventType => state.event.activeEvent;

export const selectEvents = createSelector([selectIsFetchingEvents, selectAllEvents], (isFetching, events) => {
  if (isFetching) {
    return null;
  }

  const eventsList: EventsListProps = {
    allEvents: events,
    futureEvents: [],
    pastEvents: [],
  };

  for (let i = 0; i < events.length; i += 1) {
    const event = events[i];
    if (new Date(event.startsAt) > new Date()) {
      eventsList.futureEvents.push(event);
    } else {
      eventsList.pastEvents.push(event);
    }
  }

  return eventsList;
});

export const selectEventDetails = createSelector(
  [selectIsFetchingEvent, selectActiveEvent],
  (isFetching, activeEvent) => {
    if (isFetching) {
      return null;
    }

    return activeEvent;
  }
);
