import { FC } from 'react';
import { AttendeesWrapperContainer } from './attendees-wrapper.styled';

type AttendeesWrapperProps = {
  className?: string;
};

const AttendeesWrapper: FC<AttendeesWrapperProps> = ({ children, className }) => {
  return <AttendeesWrapperContainer className={className}>{children}</AttendeesWrapperContainer>;
};

export default AttendeesWrapper;
