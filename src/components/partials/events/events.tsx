import { FC, useState } from 'react';
import { useSelector } from 'react-redux';

import EventsTopMenu from '../events-top-menu/events-top-menu';
import EventsTab from '../events-tab/events-tab';
import EventsListControl from '../events-list-control/events-list-control';
import CardList from '../../containers/card-list/card-list';
import EventsLoader from '../events-loader/events-loader';

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

const eventTabTitle = (tabValue: string) => {
  const eventTabObj = eventTabs.find((tab) => tab.value === tabValue);
  if (eventTabObj) {
    return eventTabObj.text;
  }
  return 'events';
};

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
        <CardList title={eventTabTitle(activeTab)} events={events[activeTab]} type={activeControl} />
      )}
    </EventsContainer>
  );
};

export default Events;
