import { FC, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import selectors from '../../../store/selectors';
import actions from '../../../store/actions';

import {
  UserDropdownContainer,
  UserDropdownButton,
  UserDropdownContent,
  Gravatar,
  UserName,
  LogoutButton,
} from './user-dropdown.styled';

const UserDropdown: FC = () => {
  const dispatch = useDispatch();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { firstName, lastName } = useSelector(selectors.selectUser);

  return (
    <UserDropdownContainer>
      <UserDropdownButton onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        <Gravatar>{`${firstName[0]}${lastName[0]}`}</Gravatar>
        <UserName>{`${firstName} ${lastName}`}</UserName>
        <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M0 0L5 5L10 0H0Z" fill="#D9DCE1" />
        </svg>
      </UserDropdownButton>
      {isDropdownOpen && (
        <UserDropdownContent>
          <li>
            <span>Profile</span>
          </li>
          <li>
            <LogoutButton onClick={() => dispatch(actions.doLogoutUser())}>Logout</LogoutButton>
          </li>
        </UserDropdownContent>
      )}
    </UserDropdownContainer>
  );
};

export default UserDropdown;
