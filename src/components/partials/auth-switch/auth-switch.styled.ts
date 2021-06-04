import styled from 'styled-components';

export const AuthSwitchContainer = styled.p`
  margin: 0;
  color: var(--color-grey-lighter);
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.5rem;
`;

export const AuthSwitchButton = styled.button`
  text-transform: uppercase;
  background-color: transparent;
  cursor: pointer;
  color: var(--color-grey-dark);
  padding: 0;
  font-weight: 500;
  border: none;
  font-size: 0.875rem;
  line-height: 1.5rem;

  &:hover {
    color: var(--color-secondary);
  }
`;

export default {
  AuthSwitchContainer,
  AuthSwitchButton,
};
