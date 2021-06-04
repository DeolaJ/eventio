import styled from 'styled-components';

export const DateLabel = styled.label`
  font-size: 0.875rem;
  line-height: 1.5rem;
  color: var(--color-grey-light);
  display: block;
  margin: 0;
`;

export const DatePickerWrapper = styled.div`
  width: 100%;
  padding: 0 0 0.5rem 0;
  border-bottom: 1px solid var(--color-border-bottom);

  &.active {
    border-color: var(--color-secondary);
  }

  &.error {
    border-color: var(--color-red);
  }

  .react-time-picker__wrapper,
  .react-date-picker__wrapper {
    align-items: center;
    border: none;

    svg {
      width: 1rem;
    }

    button {
      margin-top: 0;
    }
  }
`;
export const DateFieldError = styled.p`
  color: var(--color-red);
  font-size: 1.125rem;
  line-height: 1.5rem;
`;

export default {
  DateLabel,
  DatePickerWrapper,
  DateFieldError,
};
