import styled from 'styled-components';

export const ActiveEventDetailsContainer = styled.section`
  padding: 9rem 0.5rem;
  width: 100%;

  .detail-event,
  .delete-event-button span:not(.icon) {
    font-weight: 600;
    font-size: 0.75rem;
    line-height: 1.5rem;
    letter-spacing: 1px;
    color: var(--color-secondary-light);
    text-transform: uppercase;
  }

  .detail-event {
    color: var(--color-secondary-light);
  }

  .delete-event-button span:not(.icon) {
    color: var(--color-red);
    display: none;
  }

  @media (min-width: 320px) {
    padding: 9rem 1.5rem;
  }

  @media (min-width: 768px) {
    padding: 9rem 2rem;
    max-width: 1232px;
    margin: 0 auto;

    .delete-event-button span:not(.icon) {
      display: inline;
    }
  }
`;

export const EventDetailsGrid = styled.div`
  display: flex;
  margin-top: 1.25rem;
  flex-direction: column;

  > * + * {
    margin-top: 1rem;
  }

  @media (min-width: 768px) {
    margin-top: 2rem;
    flex-direction: row;

    > * {
      flex-grow: 1;
    }

    > * + * {
      margin-left: 1rem;
      margin-top: 0;
      flex-grow: 0;
      width: 390px;
      flex-shrink: 1;
    }
  }
`;

export default {
  ActiveEventDetailsContainer,
  EventDetailsGrid,
};
