import { FC } from 'react';

import CardWrapper from '../../containers/card-wrapper/card-wrapper';
import { AttendeeList, AttendeeCardContainer } from './attendee-card.styled';
import AttendeePill from '../attendee-pill/attendee-pill';
import { UserType } from '../../../types';

type AttendeeCardProps = {
  attendees: UserType[];
  userId: string;
};

const AttendeeCard: FC<AttendeeCardProps> = ({ attendees, userId }) => {
  return (
    <CardWrapper>
      <AttendeeCardContainer>
        <h4>Attendees</h4>
        <AttendeeList>
          {attendees.map((attendee) => (
            <AttendeePill attendee={attendee} key={attendee.id} userId={userId} />
          ))}
        </AttendeeList>
      </AttendeeCardContainer>
    </CardWrapper>
  );
};

export default AttendeeCard;
