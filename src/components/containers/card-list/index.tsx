import { FC } from 'react';

import { CardListContainer } from './card-list.styled';
import Card from '../../partials/card';
import { EventType } from '../../../types';

type CardListProps = {
  events: EventType[];
  title: string;
};

const CardList: FC<CardListProps> = ({ events, title }) => {
  if (!events.length) {
    return <p>There are no {title} available at the moment</p>;
  }

  return (
    <CardListContainer>
      {events.map((event) => (
        <Card event={event} key={event.id} type="list" />
      ))}
    </CardListContainer>
  );
};

export default CardList;
