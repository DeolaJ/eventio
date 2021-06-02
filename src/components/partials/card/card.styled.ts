import styled from 'styled-components';

export const CardContainer = styled.li`
  background-color: #fff;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.108696);
  border-radius: 2px;

  p,
  h3 {
    margin: 0;
  }

  .title {
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 3rem;
    color: var(--color-secondary);
  }

  .description {
    font-weight: 400;
    font-size: 1rem;
    max-width: 240px;
    white-space: nowrap;
    text-overflow: ellipsis;
    line-height: 1.5rem;
    color: var(--color-grey-dark);
  }

  .owner {
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.5rem;
    color: var(--color-grey-darker);
  }

  .created {
    font-size: 0.875rem;
    line-height: 1.5rem;
    color: var(--color-date-text);
  }

  .attendees {
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.5rem;
    color: var(--color-grey-dark);
  }

  &.list {
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
  }

  &.grid {
    padding: 2rem;

    .created {
      margin-bottom: 0.625rem;
    }

    .title {
      font-size: 1.625rem;
    }

    .owner {
      margin-top: -0.625rem;
      margin-bottom: 2rem;
    }

    .description {
      max-width: initial;
      height: 3rem;
      margin-bottom: 1.5rem;
      white-space: initial;
      text-overflow: none;
    }

    .attendees-container {
      align-items: flex-end;
    }
  }
`;

export default {
  CardContainer,
};
