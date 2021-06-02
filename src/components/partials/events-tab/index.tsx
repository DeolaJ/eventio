import { FC } from 'react';
import { EventTabValueProps, EventTabsProps } from '../../../types';
import { TabButton, EventsTabContainer } from './events-tab.styled';

type EventsTabProps = {
  setTab: (type: EventTabValueProps) => void;
  activeTab: string;
  eventTabs: EventTabsProps[];
};

const EventsTab: FC<EventsTabProps> = ({ setTab, activeTab, eventTabs }) => {
  return (
    <EventsTabContainer>
      {eventTabs.map((tab) => (
        <li key={tab.value}>
          <TabButton className={`${activeTab === tab.value ? 'active' : ''}`} onClick={() => setTab(tab.value)}>
            {tab.text}
          </TabButton>
        </li>
      ))}
    </EventsTabContainer>
  );
};

export default EventsTab;
