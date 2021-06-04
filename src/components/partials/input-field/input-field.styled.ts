import styled from 'styled-components';

export const InputLabel = styled.label`
  font-size: 0.875rem;
  line-height: 1.5rem;
  color: var(--color-grey-light);
  display: block;
  min-height: 1.5rem;
  margin: 0;
`;

export const InputWrapper = styled.div`
  position: relative;

  input {
    font-size: 1.125rem;
    line-height: 1.5rem;
    color: var(--color-secondary);
    background: transparent;
    border: none;
    padding: 0 0 0.5rem 0;
    width: 100%;
    outline: none;
    border-bottom: 1px solid var(--color-border-bottom);

    &[type='password'] {
      letter-spacing: 0.5rem;
    }

    &::-ms-input-placeholder {
      color: var(--color-grey-lighter);
      letter-spacing: 0;
    }

    &:focus {
      border-color: var(--color-secondary);
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      box-shadow: 0 0 0 30px white inset !important;
    }

    &::placeholder {
      color: var(--color-grey-lighter);
      letter-spacing: 0;
      opacity: 1;
    }

    &.error {
      border-color: var(--color-red);
    }
  }

  .placeholder {
    position: absolute;
    top: 0;
    left: 0;
    text-align: left;
    margin: 0;
    width: 100%;
    height: calc(100% - 2px);
    font-size: 1.125rem;
    line-height: 1.5rem;
    border: none;
    box-shadow: none;
    cursor: text;
    outline: none;
    color: var(--color-secondary);
    background: white;
    padding: 0 0 0.5rem 0;
    z-index: 1;
  }

  .placeholder-button {
    position: absolute;
    margin: 0;
    cursor: pointer;
    right: 0;
    border: none;
    background: transparent;
    box-shadow: none;
    top: 0;
  }

  svg path {
    fill: #e1e4e6;
  }
`;

export const InputFieldError = styled.p`
  color: var(--color-red);
  font-size: 1.125rem;
  line-height: 1.5rem;
  margin-top: 0.5rem;
`;

export default {
  InputLabel,
  InputWrapper,
  InputFieldError,
};
