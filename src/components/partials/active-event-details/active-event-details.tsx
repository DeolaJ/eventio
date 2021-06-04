import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import EventsTopMenu from '../events-top-menu/events-top-menu';
import AttendeeCard from '../attendee-card/attendee-card';
import EventDetailsCard from '../event-details-card/event-details-card';
import IconTextButton from '../icon-text-button/icon-text-button';
import EventsLoader from '../events-loader/events-loader';

import { ActiveEventDetailsContainer, EventDetailsGrid } from './active-event-details.styled';
import selectors from '../../../store/selectors';
import actions from '../../../store/actions';

const ActiveEventDetails: FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const eventDetails = useSelector(selectors.selectEventDetails);
  const isEditingEvent = useSelector(selectors.selectIsEditingEvent);
  const user = useSelector(selectors.selectUser);

  return (
    <ActiveEventDetailsContainer>
      <EventsTopMenu>
        {eventDetails && <p className="detail-event">{`Detail Event: #${eventDetails.id}`}</p>}
        {eventDetails && !isEditingEvent && eventDetails.owner.id === user.id && (
          <IconTextButton
            text="Delete Event"
            className="delete-event-button"
            onClick={async () => {
              dispatch(actions.doDeleteEvent(eventDetails.id, history));
              dispatch(actions.doSetEditingEvent(false));
            }}>
            <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.999919 10.6667C0.999919 11.4 1.59992 12 2.33325 12H7.66658C8.39992 12 8.99992 11.4 8.99992 10.6667V2.66667H0.999919V10.6667ZM9.66658 0.666667H7.33325L6.66658 0H3.33325L2.66659 0.666667H0.333252V2H9.66658V0.666667Z"
                fill="#FF4081"
              />
            </svg>
          </IconTextButton>
        )}
      </EventsTopMenu>

      {eventDetails === null ? (
        <EventsLoader />
      ) : (
        <EventDetailsGrid>
          <EventDetailsCard eventDetails={eventDetails} isEditingEvent={isEditingEvent} />
          <AttendeeCard attendees={eventDetails.attendees} userId={user.id} />
        </EventDetailsGrid>
      )}
    </ActiveEventDetailsContainer>
  );
};

export default ActiveEventDetails;
