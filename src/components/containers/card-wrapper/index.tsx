import { FC } from 'react';
import { CardWrapperContainer } from './card-wrapper.styled';

type CardWrapperProps = {
  className?: string;
};

const CardWrapper: FC<CardWrapperProps> = ({ children, className }) => {
  return <CardWrapperContainer className={className}>{children}</CardWrapperContainer>;
};

export default CardWrapper;
