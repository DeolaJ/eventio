import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import Logo from '../logo/logo';
import UserDropdown from '../user-dropdown/user-dropdown';
import IconTextButton from '../icon-text-button/icon-text-button';
import selectors from '../../../store/selectors';

import { DashboardNavContainer } from './dashboard-nav.styled';

const DashboardNav: FC = () => {
  const location = useLocation();
  const isEditingEvent = useSelector(selectors.selectIsEditingEvent);

  return (
    <DashboardNavContainer>
      <Logo />

      {!isEditingEvent && !location.pathname.includes('dashboard') && (
        <Link to="/dashboard">
          <IconTextButton text="Back to events">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z"
                fill="black"
              />
            </svg>
          </IconTextButton>
        </Link>
      )}

      <UserDropdown />
    </DashboardNavContainer>
  );
};

export default DashboardNav;
