import styled from 'styled-components';

export const CardContainer = styled.li`
  background-color: #fff;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.108696);
  border-radius: 2px;

  p,
  h3 {
    margin: 0;
  }

  a {
    text-decoration: none;

    &:hover h3 {
      text-decoration: underline;
    }
  }

  .title {
    font-weight: 400;
    font-size: 1.125rem;
    overflow: hidden;
    width: 14rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    line-height: 3rem;
    color: var(--color-secondary);
  }

  .title-button {
    background: transparent;
    padding: 0;
    border: none;
    outline: none;
    cursor: pointer;
    text-align: left;
    box-shadow: none;
  }

  .description {
    font-weight: 400;
    font-size: 1rem;
    overflow: hidden;
    width: 15rem;
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
    align-items: center;
    justify-content: space-between;
    height: 72px;

    .attendees-container {
      display: none;
    }
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
      height: 48px;
      width: 100%;
      margin-bottom: 1.5rem;
      white-space: initial;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      display: -webkit-box;
      text-overflow: none;
    }

    .attendees-container {
      align-items: flex-end;
    }
  }

  @media (max-width: 768px) {
    &.list {
      height: auto;
      display: block;
      padding: 0 1rem 1rem;

      .title {
        margin-bottom: 0;
      }

      .description {
        margin-top: -0.5rem;
        margin-bottom: 0.5rem;
      }

      .owner {
        display: none;
      }

      > .attendees,
      > .created,
      > button,
      > .edit-button {
        display: none;
      }

      .attendees-container {
        display: flex;
        align-items: center;
      }
    }
  }
`;

export default {
  CardContainer,
};
