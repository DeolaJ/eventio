import styled from 'styled-components';

export const IconTextButtonContainer = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: 400;
  background: transparent;
  border: none;

  .icon {
    margin-right: 0.875rem;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 1.5rem;
    width: 1.5rem;
  }

  span {
    color: var(--color-secondary);
    font-size: 1rem;
    line-height: 3rem;
  }
`;

export default {
  IconTextButtonContainer,
};
