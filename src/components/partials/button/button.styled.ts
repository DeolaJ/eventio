import styled from 'styled-components';

export const ButtonContainer = styled.button`
  text-transform: uppercase;
  border-radius: 0.25rem;
  letter-spacing: 1px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  &.d-sm {
    width: 6.25rem;
    height: 2rem;
  }

  &.d-lg {
    width: 15rem;
    height: 57px;
  }

  &.fs-sm {
    font-size: 0.875rem;
  }

  &.fs-lg {
    font-size: 1rem;
  }

  &.lh-sm {
    line-height: 1rem;
  }

  &.lh-lg {
    line-height: 2rem;
  }
`;

export default {
  ButtonContainer,
};
