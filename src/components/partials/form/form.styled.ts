import styled from 'styled-components';

export const FormContainer = styled.form`
  max-width: 480px;
  width: 100%;

  > h2,
  > p {
    margin: 0;
  }

  h2 {
    font-weight: 400;
    font-size: 1.375rem;
    line-height: 3rem;
    margin-bottom: 0;
    text-align: center;
  }

  > p {
    font-size: 0.875rem;
    line-height: 1.5rem;
    color: var(--color-grey-dark);
    margin-bottom: 0;
    text-align: center;
  }

  > article {
    margin-top: 2.5rem;
  }

  button {
    margin-top: 2.5rem;
    margin-left: auto;
    margin-right: auto;
  }

  .auth-switch-container > p {
    margin-top: 1.5rem;
    display: block;
    text-align: center;
  }

  .auth-switch-container button {
    margin-top: 0;
  }

  @media (min-width: 768px) {
    h2 {
      font-size: 1.75rem;
      margin-bottom: 0.375rem;
      text-align: left;
    }

    > p {
      font-size: 1.125rem;
      margin-bottom: 1rem;
      text-align: left;
    }

    button {
      margin: 4rem 0 0;
    }

    .auth-switch-container {
      display: none;
    }
  }
`;

export const InputContainer = styled.div`
  padding: 1rem 0 0;
`;

export const FormError = styled.p`
  font-size: 1.125rem;
  line-height: 1.5rem;
  color: var(--color-red);
`;

export default {
  FormContainer,
  InputContainer,
  FormError,
};
