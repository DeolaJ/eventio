import styled from 'styled-components';

export const AuthContainer = styled.main`
  min-height: 100vh;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 2fr;

    svg path {
      fill: white;
    }
  }
`;

export const AuthFormContainer = styled.section`
  background: white;
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  padding: 7.125rem 1.5rem 3rem;

  @media (min-width: 768px) {
    padding: 6rem 2rem;
  }
`;

export const AuthImage = styled.div`
  height: 100%;
  background-color: var(--color-secondary);
  width: 100%;
  background-repeat: no-repeat;
  background-position: left center;
  background-size: cover;
  position: relative;
  display: none;

  img {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: calc(100% - 6rem);
    max-width: 310px;
    bottom: 5.375rem;
  }

  @media (min-width: 768px) {
    display: block;
  }
`;

export default {
  AuthContainer,
  AuthFormContainer,
  AuthImage,
};
