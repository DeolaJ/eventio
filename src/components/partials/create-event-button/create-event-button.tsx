import { FC } from 'react';
import { Link } from 'react-router-dom';

import IconSecondaryButton from '../icon-button/icon-secondary-button';

import { CreateEventButtonContainer } from './create-event-button.styled';

type CreateEventButtonProps = {
  className?: string;
};

const CreateEventButton: FC<CreateEventButtonProps> = ({ className }) => {
  return (
    <CreateEventButtonContainer>
      <Link to="/create-event">
        <IconSecondaryButton className={className}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="white" />
          </svg>
        </IconSecondaryButton>
      </Link>
    </CreateEventButtonContainer>
  );
};

export default CreateEventButton;
