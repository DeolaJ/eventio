import styled from 'styled-components';

export const ButtonContainer = styled.button`
  text-transform: uppercase;
  border-radius: 4px;
  letter-spacing: 1px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  &.d-sm {
    width: 100px;
    height: 32px;

    svg {
      height: 14px;
    }
  }

  &.d-lg {
    width: 240px;
    height: 57px;

    svg {
      height: 32px;
    }
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
