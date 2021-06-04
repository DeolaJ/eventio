import { FC } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../logo/logo';
import IconTextButton from '../icon-text-button/icon-text-button';

import { FormNavContainer } from './form-nav.styled';

const FormNav: FC = () => {
  return (
    <FormNavContainer>
      <Logo />

      <Link to="/dashboard">
        <IconTextButton text="Close">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
              fill="black"
            />
          </svg>
        </IconTextButton>
      </Link>
    </FormNavContainer>
  );
};

export default FormNav;
