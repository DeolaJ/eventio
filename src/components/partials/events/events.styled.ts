import styled from 'styled-components';

export const EventsContainer = styled.section`
  padding: 9rem 0.5rem;
  width: 100%;

  @media (min-width: 320px) {
    padding: 9rem 1.5rem;
  }

  @media (min-width: 768px) {
    padding: 9rem 2rem;
    max-width: 1232px;
    margin: 0 auto;
  }
`;

export default {
  EventsContainer,
};
