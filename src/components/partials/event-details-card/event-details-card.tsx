import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import some from 'lodash/some';

import CardWrapper from '../../containers/card-wrapper/card-wrapper';
import AttendeesWrapper from '../../containers/attendees-wrapper/attendees-wrapper';
import SpacedList from '../../containers/spaced-list/spaced-list';
import EventDetailsForm from '../form/event-details-form';
import { EventDetailsCardContainer } from './event-details-card.styled';
import PrimaryButton from '../button/primary-button';
import CreateEventButton from '../create-event-button/create-event-button';
import GreyButton from '../button/grey-button';
import DangerButton from '../button/danger-button';
import Loader from '../loader/loader';

import { EventType } from '../../../types';
import selectors from '../../../store/selectors';
import actions from '../../../store/actions';
import utils from '../../../utils';

type EventDetailsCardProps = {
  eventDetails: EventType;
  isEditingEvent: boolean;
};

const EventDetailsCard: FC<EventDetailsCardProps> = ({ eventDetails, isEditingEvent }) => {
  const dispatch = useDispatch();
  const isUpdatingStatus = useSelector(selectors.selectIsUpdatingAttendeeStatus);
  const user = useSelector(selectors.selectUser);

  return (
    <CardWrapper>
      <EventDetailsCardContainer>
        {!isEditingEvent ? (
          <>
            <p className="created">{utils.formatDate(eventDetails.createdAt)}</p>

            <h2 className="title">{eventDetails.title}</h2>

            <p className="owner">{`${eventDetails.owner.firstName} ${eventDetails.owner.lastName}`}</p>

            <p className="description">{eventDetails.description}</p>

            <SpacedList className="attendees-container">
              <AttendeesWrapper>
                <span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 10C5.33 10 0 11.34 0 14V16H16V14C16 11.34 10.67 10 8 10Z"
                      fill="#949EA8"
                    />
                  </svg>
                </span>

                <p className="attendees">{` ${eventDetails.attendees.length} of ${eventDetails.capacity}`}</p>
              </AttendeesWrapper>

              {user.id === eventDetails.owner.id ? (
                <GreyButton size="sm" text="Edit" onClick={() => dispatch(actions.doSetEditingEvent(true))} />
              ) : (
                <>
                  {some(eventDetails.attendees, user) ? (
                    <DangerButton
                      size="sm"
                      text={
                        isUpdatingStatus.loading && isUpdatingStatus.eventId === eventDetails.id ? (
                          <Loader light />
                        ) : (
                          'Leave'
                        )
                      }
                      onClick={() => dispatch(actions.doSetAttendeeStatus(eventDetails.id, false))}
                    />
                  ) : (
                    <PrimaryButton
                      size="sm"
                      text={
                        isUpdatingStatus.loading && isUpdatingStatus.eventId === eventDetails.id ? (
                          <Loader light />
                        ) : (
                          'Join'
                        )
                      }
                      onClick={() => dispatch(actions.doSetAttendeeStatus(eventDetails.id, true))}
                    />
                  )}
                </>
              )}
            </SpacedList>
            <CreateEventButton className="event-details__create-button" />
          </>
        ) : (
          <EventDetailsForm eventDetails={eventDetails} />
        )}
      </EventDetailsCardContainer>
    </CardWrapper>
  );
};

export default EventDetailsCard;
