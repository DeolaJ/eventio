import styled from 'styled-components';

export const Gravatar = styled.p`
  height: 2.5rem;
  width: 2.5rem;
  background: var(--color-grey);
  color: var(--color-grey-dark);
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 0.875rem;
`;

export const UserDropdownButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;

  > * + * {
    margin-left: 0.5rem;
  }
`;

export const LogoutButton = styled.button`
  background-color: transparent;
  width: 100%;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;

  > * + * {
    margin-left: 0.5rem;
  }
`;

export const UserDropdownContainer = styled.p`
  position: relative;
  height: 2.5rem;
`;

export const UserDropdownContent = styled.ul`
  z-index: 12;
  display: flex;
  left: 0;
  transition: all 0.3s;
  width: 5.5rem;
  position: absolute;
  background: white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.198087);
  border-radius: 14px;
  bottom: -17px;
  list-style-type: none;
  margin: 0;
  padding: 0;
  flex-direction: column;

  &::after {
    position: absolute;
    width: 0;
    height: 0;
    content: '';
    border-style: solid;
    border-width: 0.75rem;
    border-color: white transparent transparent white;
    transform: rotate(90deg);
    top: 0;
    right: 1rem;
    transition: all 0.2s;
    -webkit-transition: all 0.2s;
    border-radius: 0.25rem 0 0 0;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.198087);
  }

  li {
    padding: 1rem 2rem;
  }

  li > * {
    width: 100%;
    color: var(--color-grey-dark);
    font-size: 0.875rem;
    line-height: 1.5rem;
  }

  li > *:hover {
    color: var(--color-secondary);
  }
`;

export const UserName = styled.span`
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.5rem;
  color: var(--color-grey-dark);
`;

export default {
  UserDropdownContainer,
  UserDropdownButton,
  UserDropdownContent,
  Gravatar,
  UserName,
  LogoutButton,
};
