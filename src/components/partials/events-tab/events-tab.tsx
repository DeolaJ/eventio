import React, { FC, ChangeEvent } from 'react';
import { EventTabValueProps, EventTabsProps } from '../../../types';
import { TabButton, EventsTabContainer, EventsTabDropdown } from './events-tab.styled';
import Caret from '../../../assets/images/caret-black.svg';

type EventsTabProps = {
  setTab: (type: EventTabValueProps) => void;
  activeTab: string;
  eventTabs: EventTabsProps[];
};

type EventObj = {
  [key: string]: EventTabValueProps;
};

const eventObj: EventObj = {
  allEvents: 'allEvents',
  futureEvents: 'futureEvents',
  pastEvents: 'pastEvents',
};

const EventsTab: FC<EventsTabProps> = ({ setTab, activeTab, eventTabs }) => {
  return (
    <>
      <EventsTabContainer>
        {eventTabs.map((tab) => (
          <li key={tab.value}>
            <TabButton className={`${activeTab === tab.value ? 'active' : ''}`} onClick={() => setTab(tab.value)}>
              {tab.text}
            </TabButton>
          </li>
        ))}
      </EventsTabContainer>
      <EventsTabDropdown>
        <span>Show: </span>
        <select
          style={{
            backgroundImage: `url(${Caret})`,
          }}
          value={activeTab}
          onChange={(e: ChangeEvent<HTMLSelectElement>) => setTab(eventObj[e.target.value])}
          onBlur={(e: ChangeEvent<HTMLSelectElement>) => setTab(eventObj[e.target.value])}>
          {eventTabs.map((tab) => (
            <React.Fragment key={tab.value}>
              <option value={tab.value}>{tab.text}</option>
            </React.Fragment>
          ))}
        </select>
      </EventsTabDropdown>
    </>
  );
};

export default EventsTab;
