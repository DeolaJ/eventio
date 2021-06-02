import { FC } from 'react';

import { AttendeePillContainer } from './attendee-pill.styled';
import { UserType } from '../../../types';

type AttendeePillProps = {
  attendee: UserType;
};

const AttendeePill: FC<AttendeePillProps> = ({ attendee }) => {
  return <AttendeePillContainer>{attendee}</AttendeePillContainer>;
};

export default AttendeePill;
