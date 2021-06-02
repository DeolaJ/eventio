import reducer, { defaultState } from '../event';
import { fetchEventSuccess, fetchAllEventsSuccess } from '../../actions/fetch';

describe('Fetch Event Reducers', () => {
  it('should return the initial state', () => {
    expect(reducer(defaultState, { type: '' })).toEqual({
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
    });
  });

  it('should handle FETCH_ALL_EVENTS_SUCCESS', () => {
    expect(
      reducer(
        defaultState,
        fetchAllEventsSuccess({
          isFetchingEvents: false,
          events: [
            {
              id: '58493db9691ecc0d3da51bfd',
              title: 'Awesome event',
              description: 'A bunch of people doing awesome stuff',
              startsAt: '2016-12-08T10:46:33.901Z',
              capacity: 50,
              owner: {
                id: '58493e0b691ecc0d3da51bfe',
                firstName: 'Robert',
                lastName: 'Rossmann',
                email: 'robert.rossmann@strv.com',
                createdAt: '2016-12-08T10:46:33.901Z',
                updatedAt: '2016-12-08T10:46:33.901Z',
              },
              attendees: [
                {
                  id: '58493e0b691ecc0d3da51bfe',
                  firstName: 'Robert',
                  lastName: 'Rossmann',
                  email: 'robert.rossmann@strv.com',
                  createdAt: '2016-12-08T10:46:33.901Z',
                  updatedAt: '2016-12-08T10:46:33.901Z',
                },
              ],
              createdAt: '2016-12-08T10:46:33.901Z',
              updatedAt: '2016-12-08T10:46:33.901Z',
            },
          ],
        })
      )
    ).toEqual({
      events: [
        {
          id: '58493db9691ecc0d3da51bfd',
          title: 'Awesome event',
          description: 'A bunch of people doing awesome stuff',
          startsAt: '2016-12-08T10:46:33.901Z',
          capacity: 50,
          owner: {
            id: '58493e0b691ecc0d3da51bfe',
            firstName: 'Robert',
            lastName: 'Rossmann',
            email: 'robert.rossmann@strv.com',
            createdAt: '2016-12-08T10:46:33.901Z',
            updatedAt: '2016-12-08T10:46:33.901Z',
          },
          attendees: [
            {
              id: '58493e0b691ecc0d3da51bfe',
              firstName: 'Robert',
              lastName: 'Rossmann',
              email: 'robert.rossmann@strv.com',
              createdAt: '2016-12-08T10:46:33.901Z',
              updatedAt: '2016-12-08T10:46:33.901Z',
            },
          ],
          createdAt: '2016-12-08T10:46:33.901Z',
          updatedAt: '2016-12-08T10:46:33.901Z',
        },
      ],
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
    });
  });

  it('should handle FETCH_EVENT_SUCCESS', () => {
    expect(
      reducer(
        defaultState,
        fetchEventSuccess({
          isFetchingEvent: false,
          event: {
            id: '58493db9691ecc0d3da51bfd',
            title: 'Awesome event',
            description: 'A bunch of people doing awesome stuff',
            startsAt: '2016-12-08T10:46:33.901Z',
            capacity: 50,
            owner: {
              id: '58493e0b691ecc0d3da51bfe',
              firstName: 'Robert',
              lastName: 'Rossmann',
              email: 'robert.rossmann@strv.com',
              createdAt: '2016-12-08T10:46:33.901Z',
              updatedAt: '2016-12-08T10:46:33.901Z',
            },
            attendees: [
              {
                id: '58493e0b691ecc0d3da51bfe',
                firstName: 'Robert',
                lastName: 'Rossmann',
                email: 'robert.rossmann@strv.com',
                createdAt: '2016-12-08T10:46:33.901Z',
                updatedAt: '2016-12-08T10:46:33.901Z',
              },
            ],
            createdAt: '2016-12-08T10:46:33.901Z',
            updatedAt: '2016-12-08T10:46:33.901Z',
          },
        })
      )
    ).toEqual({
      events: [],
      activeEvent: {
        id: '58493db9691ecc0d3da51bfd',
        title: 'Awesome event',
        description: 'A bunch of people doing awesome stuff',
        startsAt: '2016-12-08T10:46:33.901Z',
        capacity: 50,
        owner: {
          id: '58493e0b691ecc0d3da51bfe',
          firstName: 'Robert',
          lastName: 'Rossmann',
          email: 'robert.rossmann@strv.com',
          createdAt: '2016-12-08T10:46:33.901Z',
          updatedAt: '2016-12-08T10:46:33.901Z',
        },
        attendees: [
          {
            id: '58493e0b691ecc0d3da51bfe',
            firstName: 'Robert',
            lastName: 'Rossmann',
            email: 'robert.rossmann@strv.com',
            createdAt: '2016-12-08T10:46:33.901Z',
            updatedAt: '2016-12-08T10:46:33.901Z',
          },
        ],
        createdAt: '2016-12-08T10:46:33.901Z',
        updatedAt: '2016-12-08T10:46:33.901Z',
      },
      isFetchingEvent: false,
      isFetchingEvents: false,
      isCreatingEvent: false,
      isUpdatingEvent: false,
      isEditingEvent: false,
      isUpdatingAttendeeStatus: false,
      isDeletingEvent: false,
    });
  });
});
