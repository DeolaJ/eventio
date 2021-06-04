import styled from 'styled-components';

export const Gravatar = styled.p`
  height: 40px;
  width: 40px;
  background: var(--color-grey);
  color: var(--color-grey-dark);
  font-weight: 500;
  border-radius: 50%;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 11px;
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

export const UserDropdownContainer = styled.div`
  position: relative;

  p {
    margin: 0;
  }
`;

export const UserDropdownContent = styled.ul`
  z-index: 12;
  right: -18px;
  transition: all 0.3s;
  width: 162px;
  position: absolute;
  background: white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.198087);
  border-radius: 14px;
  top: calc(100% + 13px);
  list-style-type: none;
  margin: 0;
  padding: 1rem 0;

  &::after {
    position: absolute;
    width: 0;
    height: 0;
    content: '';
    border-style: solid;
    border-width: 9px;
    border-color: white transparent transparent white;
    transform: rotate(45deg);
    top: -8px;
    right: 20px;
    transition: all 0.2s;
    -webkit-transition: all 0.2s;
    border-radius: 4px 0 0 0;
    box-shadow: -9px -4px 14px rgba(0, 0, 0, 0.11);
  }

  li {
    padding: 0 1rem;
  }

  li::before {
    content: '';
  }

  li > * {
    width: 100%;
    color: var(--color-grey-dark);
    font-size: 0.875rem;
    line-height: 1.5rem;
    display: flex;
  }

  li + li {
    margin-top: 0.5rem;
  }

  li > *:hover {
    color: var(--color-secondary);
  }

  button {
    padding-left: 0;
  }
`;

export const UserName = styled.span`
  display: none;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.5rem;
  color: var(--color-grey-dark);

  @media (min-width: 768px) {
    display: block;
  }
`;

export default {
  UserDropdownContainer,
  UserDropdownButton,
  UserDropdownContent,
  Gravatar,
  UserName,
  LogoutButton,
};
