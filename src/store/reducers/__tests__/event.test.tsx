import reducer, { defaultState } from '../event';
import {
  createEventSuccess,
  updateEventSuccess,
  setAttendeeStatusSuccess,
  deleteEventSuccess,
} from '../../actions/event';

describe('Event Action Reducers', () => {
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

  it('should handle CREATE_EVENT_SUCCESS', () => {
    expect(
      reducer(
        defaultState,
        createEventSuccess({
          isCreatingEvent: false,
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

  it('should handle UPDATE_EVENT_SUCCESS', () => {
    expect(
      reducer(
        {
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
          isUpdatingEvent: true,
          isEditingEvent: false,
          isUpdatingAttendeeStatus: false,
          isDeletingEvent: false,
        },
        updateEventSuccess({
          isUpdatingEvent: false,
          event: {
            id: '58493db9691ecc0d3da51bfd',
            title: 'Awesome events',
            description: 'A bunch of people doing awesome stuff',
            startsAt: '2016-12-08T10:46:33.901Z',
            capacity: 100,
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
      events: [
        {
          id: '58493db9691ecc0d3da51bfd',
          title: 'Awesome events',
          description: 'A bunch of people doing awesome stuff',
          startsAt: '2016-12-08T10:46:33.901Z',
          capacity: 100,
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
        id: '58493db9691ecc0d3da51bfd',
        title: 'Awesome events',
        description: 'A bunch of people doing awesome stuff',
        startsAt: '2016-12-08T10:46:33.901Z',
        capacity: 100,
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

  it('should handle SET_ATTENDEE_STATUS_SUCCESS', () => {
    expect(
      reducer(
        {
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
              attendees: [],
              createdAt: '2016-12-08T10:46:33.901Z',
              updatedAt: '2016-12-08T10:46:33.901Z',
            },
          ],
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
            attendees: [],
            createdAt: '2016-12-08T10:46:33.901Z',
            updatedAt: '2016-12-08T10:46:33.901Z',
          },
          isFetchingEvent: false,
          isFetchingEvents: false,
          isCreatingEvent: false,
          isUpdatingEvent: false,
          isEditingEvent: false,
          isUpdatingAttendeeStatus: true,
          isDeletingEvent: false,
        },
        setAttendeeStatusSuccess({
          isUpdatingAttendeeStatus: false,
          eventId: '58493db9691ecc0d3da51bfd',
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

  it('should handle DELETE_EVENT_SUCCESS', () => {
    expect(
      reducer(
        {
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
          isDeletingEvent: true,
        },
        deleteEventSuccess({
          isDeletingEvent: false,
          eventId: '58493db9691ecc0d3da51bfd',
        })
      )
    ).toEqual({
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
});
