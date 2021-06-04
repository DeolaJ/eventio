import { FC } from 'react';
import SpacedList from '../../containers/spaced-list/spaced-list';

const EventsTopMenu: FC = ({ children }) => {
  return <SpacedList>{children}</SpacedList>;
};

export default EventsTopMenu;
