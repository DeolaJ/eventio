import styled from 'styled-components';

export const IconTextButtonContainer = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  background: transparent;
  border: none;

  .icon {
    margin-right: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 24px;
    width: 24px;
  }

  span {
    color: var(--color-secondary);
    font-size: 1rem;
    font-weight: 400;
  }
`;

export default {
  IconTextButtonContainer,
};
