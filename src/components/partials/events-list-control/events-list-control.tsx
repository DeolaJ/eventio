import { FC } from 'react';
import { ControlButton, EventsListControlContainer } from './events-list-control.styled';

type EventsListControlProps = {
  setControl: (type: string) => void;
  activeControl: string;
};

const controls = [
  {
    image: (
      <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 6H5V0H0V6ZM0 13H5V7H0V13ZM6 13H11V7H6V13ZM12 13H17V7H12V13ZM6 6H11V0H6V6ZM12 0V6H17V0H12Z"
          fill="#D9DCE1"
        />
      </svg>
    ),
    value: 'grid',
  },
  {
    image: (
      <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M0 13H17V7H0V13ZM0 0V6H17V0H0Z" fill="#D9DCE1" />
      </svg>
    ),
    value: 'list',
  },
];

const EventsListControl: FC<EventsListControlProps> = ({ setControl, activeControl }) => {
  return (
    <EventsListControlContainer>
      {controls.map((control) => (
        <li key={control.value}>
          <ControlButton
            className={`${activeControl === control.value ? 'active' : ''}`}
            onClick={() => setControl(control.value)}>
            {control.image}
          </ControlButton>
        </li>
      ))}
    </EventsListControlContainer>
  );
};

export default EventsListControl;
