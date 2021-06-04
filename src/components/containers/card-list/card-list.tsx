import { FC } from 'react';

import { CardListContainer, CardEmptyContainer } from './card-list.styled';
import Card from '../../partials/card/card';
import { EventType } from '../../../types';

type CardListProps = {
  events: EventType[];
  title: string;
  type: string;
};

const CardList: FC<CardListProps> = ({ events, title, type }) => {
  if (!events.length) {
    return <CardEmptyContainer>There are no {title} available at the moment</CardEmptyContainer>;
  }

  return (
    <CardListContainer className={type}>
      {events.map((event) => (
        <Card event={event} key={event.id} type={type} />
      ))}
    </CardListContainer>
  );
};

export default CardList;
