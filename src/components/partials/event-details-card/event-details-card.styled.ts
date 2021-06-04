import styled from 'styled-components';

export const EventDetailsCardContainer = styled.section`
  padding: 2rem;
  flex-grow: 1;

  p,
  h2 {
    margin: 0;
  }

  .title {
    font-weight: 400;
    font-size: 45px;
    line-height: 3rem;
    margin-bottom: 3px;
    color: var(--color-secondary);
  }

  .description {
    font-weight: 400;
    font-size: 1rem;
    max-width: 420px;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    display: -webkit-box;
    line-height: 1.5rem;
    margin-bottom: 2rem;
    color: var(--color-grey-dark);
  }

  .owner {
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.5rem;
    margin-bottom: 1.5rem;
    color: var(--color-grey-darker);
  }

  .created {
    font-size: 0.875rem;
    line-height: 1.5rem;
    color: var(--color-date-text);
    margin-bottom: 21px;
  }

  .attendees {
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.5rem;
    color: var(--color-grey-dark);
  }

  .attendees-container {
    align-items: flex-end;
  }

  form {
    margin-top: -0.5rem;
    margin-bottom: 1.5rem;
    width: 100%;
    max-width: initial;
  }
`;

export default {
  EventDetailsCardContainer,
};
