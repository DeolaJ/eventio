import { FC } from 'react';
import { useDispatch } from 'react-redux';

import actions from '../../../store/actions';

const Login: FC = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        type="button"
        onClick={() =>
          dispatch(
            actions.doLoginUser({
              email: 'tonystark@strv.com',
              password: 'ir0nL0ver',
            })
          )
        }>
        Login
      </button>
      <button
        type="button"
        onClick={() =>
          dispatch(
            actions.doSignupUser({
              firstName: 'Adeola',
              lastName: 'Adeyemo',
              email: 'tonystark@strv.com',
              password: 'ir0nL0ver',
            })
          )
        }>
        Sign up
      </button>
      <button
        type="button"
        onClick={() =>
          dispatch(
            actions.doCreateEvent({
              title: 'Here',
              description: 'I am here ooh',
              startsAt: '2021-05-30T15:38:51.743Z',
              capacity: 20,
            })
          )
        }>
        Create Event
      </button>
    </div>
  );
};

export default Login;
