import { FC } from 'react';

import Loader from '../loader';
import { EventsLoaderContainer } from './events-loader.styled';

const EventsLoader: FC = () => {
  return (
    <EventsLoaderContainer>
      <Loader />
    </EventsLoaderContainer>
  );
};

export default EventsLoader;
