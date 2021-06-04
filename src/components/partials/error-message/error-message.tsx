import { FC } from 'react';

import SecondaryButton from '../button/secondary-button';
import { ErrorMessageContainer } from './error-message.styled';

type ErrorMessageProps = {
  title: string;
  link: string;
};

const ErrorMessage: FC<ErrorMessageProps> = ({ title, link }) => {
  return (
    <ErrorMessageContainer>
      <h3>{title}</h3>
      <p>
        Seems like Darth Vader just hits our website and drops it down. Please press the refresh button and everything
        should be fine again.
      </p>
      <a href={link}>
        <SecondaryButton size="lg" text="Refresh" />
      </a>
    </ErrorMessageContainer>
  );
};

export default ErrorMessage;
