import { FC } from 'react';

import { CardGridContainer } from './card-grid.styled';
import Card from '../../partials/card';
import { EventType } from '../../../types';

type CardGridProps = {
  events: EventType[];
  title: string;
};

const CardGrid: FC<CardGridProps> = ({ events, title }) => {
  if (!events.length) {
    return <p>There are no {title} available at the moment</p>;
  }

  return (
    <CardGridContainer>
      {events.map((event) => (
        <Card event={event} key={event.id} type="grid" />
      ))}
    </CardGridContainer>
  );
};

export default CardGrid;
