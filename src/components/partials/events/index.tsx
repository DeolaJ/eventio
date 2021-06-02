import { FC, useState } from 'react';
import { useSelector } from 'react-redux';

import EventsTopMenu from '../events-top-menu';
import EventsTab from '../events-tab';
import EventsListControl from '../events-list-control';
import CardList from '../../containers/card-list';
import CardGrid from '../../containers/card-grid';
import EventsLoader from '../../partials/events-loader';

import { EventsContainer } from './events.styled';
import selectors from '../../../store/selectors';
import { EventTabValueProps, EventTabsProps } from '../../../types';

const eventTabs: EventTabsProps[] = [
  {
    text: 'All Events',
    value: 'allEvents',
  },
  {
    text: 'Future Events',
    value: 'futureEvents',
  },
  {
    text: 'Past Events',
    value: 'pastEvents',
  },
];

const Events: FC = () => {
  const events = useSelector(selectors.selectEvents);

  const [activeTab, setTab] = useState<EventTabValueProps>('allEvents');
  const [activeControl, setControl] = useState('grid');

  return (
    <EventsContainer>
      <EventsTopMenu>
        <EventsTab activeTab={activeTab} setTab={setTab} eventTabs={eventTabs} />
        <EventsListControl activeControl={activeControl} setControl={setControl} />
      </EventsTopMenu>
      {events === null ? (
        <EventsLoader />
      ) : (
        <>
          {activeControl === 'grid' && <CardGrid title="Events" events={events[activeTab]} />}
          {activeControl === 'list' && <CardList title="Events" events={events[activeTab]} />}
        </>
      )}
    </EventsContainer>
  );
};

export default Events;
