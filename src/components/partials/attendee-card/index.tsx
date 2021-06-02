import { FC } from 'react';

import CardWrapper from '../../containers/card-wrapper';
import { AttendeeList, AttendeeCardContainer } from './attendee-card.styled';
import AttendeePill from '../attendee-pill';
import { UserType } from '../../../types';

type AttendeeCardProps = {
  attendees: UserType[];
};

const AttendeeCard: FC<AttendeeCardProps> = ({ attendees }) => {
  return (
    <CardWrapper>
      <AttendeeCardContainer>
        <h4>Attendees</h4>
        <AttendeeList>
          {attendees.map((attendee) => (
            <AttendeePill attendee={attendee} key={attendee.id} />
          ))}
        </AttendeeList>
      </AttendeeCardContainer>
    </CardWrapper>
  );
};

export default AttendeeCard;
