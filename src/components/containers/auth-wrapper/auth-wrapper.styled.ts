import styled from 'styled-components';

export const AuthContainer = styled.main`
  display: grid;
  grid-template-columns: 480px 1fr;
`;

export const AuthFormContainer = styled.section`
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AuthImage = styled.img`
  height: 100%;
  object-fit: cover;
  object-position: left center;
`;

export default {
  AuthContainer,
  AuthFormContainer,
  AuthImage,
};
