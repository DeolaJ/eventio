import styled from 'styled-components';

export const CardListContainer = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  margin-top: 2rem;

  &.list {
    li + li {
      margin-top: 1rem;
    }
  }

  &.grid {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }

  @media (min-width: 768px) {
    margin-top: 2.25rem;
  }
`;

export const CardEmptyContainer = styled.p`
  margin-top: 3rem;
  font-size: 1rem;
`;

export default {
  CardListContainer,
  CardEmptyContainer,
};
