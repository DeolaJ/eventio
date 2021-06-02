import styled from 'styled-components';

export const ActiveEventDetailsContainer = styled.section`
  .detail-event {
    font-weight: 600;
    font-size: 0.75rem;
    line-height: 1.5rem;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  @media (min-width: 768px) {
    padding: 4rem 7.5rem;
  }
`;

export const EventDetailsGrid = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 2.5rem;

  > * + * {
    margin-left: 1rem;
  }
`;

export default {
  ActiveEventDetailsContainer,
  EventDetailsGrid,
};
