import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import actions from '../../../store/actions';

const Events: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.doFetchAllEvents());
    dispatch(actions.doFetchEvent('60a79b667c03f8001a699083'));
  });

  return (
    <div>
      <button type="button" onClick={() => dispatch(actions.doLogoutUser())}>
        Logout
      </button>
      <button
        type="button"
        onClick={() =>
          dispatch(
            actions.doCreateEvent({
              title: 'Here',
              description: 'I am here ooh',
              startsAt: '2021-06-30T15:38:51.743Z',
              capacity: 20,
            })
          )
        }>
        Create Event
      </button>
      <button
        type="button"
        onClick={() =>
          dispatch(
            actions.doUpdateEvent('60b3b3b49e2ffd001b5f2dd5', {
              title: 'Here now now',
              description: 'I am here now',
              startsAt: '2021-06-20T15:38:51.743Z',
              capacity: 50,
            })
          )
        }>
        Update Event
      </button>
      <button type="button" onClick={() => dispatch(actions.doSetAttendeeStatus('60b3b3b49e2ffd001b5f2dd5', true))}>
        Attend Event
      </button>
      <button type="button" onClick={() => dispatch(actions.doDeleteEvent('60b3b3b49e2ffd001b5f2dd5'))}>
        Delete Event
      </button>
    </div>
  );
};

export default Events;
