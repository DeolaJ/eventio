import { FC } from 'react';

import { AttendeePillContainer } from './attendee-pill.styled';
import { UserType } from '../../../types';

type AttendeePillProps = {
  attendee: UserType;
  userId: string;
};

const AttendeePill: FC<AttendeePillProps> = ({ attendee, userId }) => {
  return (
    <AttendeePillContainer className={`${userId === attendee.id ? 'owner' : ''}`}>
      {userId !== attendee.id ? <> {`${attendee.firstName} ${attendee.lastName}`} </> : 'You'}
    </AttendeePillContainer>
  );
};

export default AttendeePill;
