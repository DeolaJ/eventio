import styled from 'styled-components';

export const CreateEventFormContainer = styled.section`
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  padding: 7rem 2rem;

  > article {
    max-width: 480px;
    width: 100%;
    padding: 2.5rem 2rem;
  }

  form > p,
  form > h2 {
    text-align: center;
  }

  button {
    margin-top: 1.5rem;
    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: 768px) {
    padding: 7rem 4rem;
  }
`;

export default {
  CreateEventFormContainer,
};
