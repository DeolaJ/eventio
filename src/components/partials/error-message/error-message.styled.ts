import styled from 'styled-components';

export const ErrorMessageContainer = styled.article`
  h3 {
    margin-top: 0;
    margin-bottom: 0.375rem;
    font-size: 1.75rem;
    line-height: 3rem;
    color: var(--color-secondary);
  }

  p {
    margin-top: 0;
    margin-bottom: 2.5rem;
    font-size: 1.125rem;
    line-height: 1.5rem;
    max-width: 522px;
  }
`;

export default {
  ErrorMessageContainer,
};
