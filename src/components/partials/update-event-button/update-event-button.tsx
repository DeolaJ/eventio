import { FC } from 'react';

import Loader from '../loader/loader';
import IconPrimaryButton from '../icon-button/icon-primary-button';

import { UpdateEventButtonContainer } from './update-event-button.styled';

type UpdateEventButtonProps = {
  className?: string;
  onClick?: () => void;
  isLoading?: boolean;
};

const UpdateEventButton: FC<UpdateEventButtonProps> = ({ className, onClick, isLoading }) => {
  return (
    <UpdateEventButtonContainer>
      <IconPrimaryButton className={className} onClick={onClick}>
        {!isLoading ? (
          <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.99991 11.1701L1.82991 7.00009L0.409912 8.41009L5.99991 14.0001L17.9999 2.00009L16.5899 0.590088L5.99991 11.1701Z"
              fill="white"
            />
          </svg>
        ) : (
          <Loader light />
        )}
      </IconPrimaryButton>
    </UpdateEventButtonContainer>
  );
};

export default UpdateEventButton;
