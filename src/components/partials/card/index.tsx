import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { EventType } from '../../../types';
import SpacedList from '../../containers/spaced-list';
import AttendeesWrapper from '../../containers/attendees-wrapper';
import PrimaryButton from '../button/primary-button';
import GreyButton from '../button/grey-button';
import DangerButton from '../button/danger-button';

import selectors from '../../../store/selectors';
import actions from '../../../store/actions';

import { CardContainer } from './card.styled';

type CardProps = {
  event: EventType;
  type: string;
};

const Card: FC<CardProps> = ({ event, type }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectors.selectUser);

  if (type === 'list') {
    <CardContainer className="list">
      <Link to={`/event/${event.id}`}>
        <h3 className="title">{event.title}</h3>
      </Link>

      <p className="description">{event.description}</p>

      <p className="owner">{event.owner}</p>

      <p className="created">{event.createdAt}</p>

      <p className="attendees">{`${event.attendees.length} of ${event.capacity}`}</p>

      {user.id === event.owner.id ? (
        <Link to={`/event/${event.id}`}>
          <GreyButton
            size="sm"
            text="Edit"
            onClick={() => {
              dispatch(actions.doSetEditingEvent(true));
            }}
          />
        </Link>
      ) : (
        <>
          {event.attendees.includes(user) ? (
            <DangerButton
              size="sm"
              text="Leave"
              onClick={() => dispatch(actions.doSetAttendeeStatus(event.id, false))}
            />
          ) : (
            <PrimaryButton
              size="sm"
              text="Join"
              onClick={() => dispatch(actions.doSetAttendeeStatus(event.id, true))}
            />
          )}
        </>
      )}
    </CardContainer>;
  }

  return (
    <CardContainer className="grid">
      <p className="created">{event.createdAt}</p>

      <Link to={`/event/${event.id}`}>
        <h3 className="title">{event.title}</h3>
      </Link>

      <p className="owner">{event.owner}</p>

      <p className="description">{event.description}</p>

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

          <p className="attendees">{` ${event.attendees.length} of ${event.capacity}`}</p>
        </AttendeesWrapper>

        {user.id === event.owner.id ? (
          <Link to={`/event/${event.id}`}>
            <GreyButton
              size="sm"
              text="Edit"
              onClick={() => {
                dispatch(actions.doSetEditingEvent(true));
              }}
            />
          </Link>
        ) : (
          <>
            {event.attendees.includes(user) ? (
              <DangerButton
                size="sm"
                text="Leave"
                onClick={() => dispatch(actions.doSetAttendeeStatus(event.id, false))}
              />
            ) : (
              <PrimaryButton
                size="sm"
                text="Join"
                onClick={() => dispatch(actions.doSetAttendeeStatus(event.id, true))}
              />
            )}
          </>
        )}
      </SpacedList>
    </CardContainer>
  );
};

export default Card;
