import { FC } from 'react';
import { SpacedListContainer } from './spaced-list.styled';

type SpacedListProps = {
  className?: string;
};

const SpacedList: FC<SpacedListProps> = ({ children, className }) => {
  return <SpacedListContainer className={className}>{children}</SpacedListContainer>;
};

export default SpacedList;
