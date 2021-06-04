import styled from 'styled-components';

export const AttendeeCardContainer = styled.section`
  padding: 1.625rem 2rem;

  h4 {
    font-weight: 400;
    font-size: 1.375rem;
    line-height: 2rem;
    margin-top: 0;
    margin-bottom: 1.375rem;
  }

  @media (min-width: 768px) {
    max-height: 296px;
  }
`;

export const AttendeeList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  li {
    margin-bottom: 0.5rem;
    margin-right: 0.5rem;
  }

  @media (min-width: 768px) {
    li {
      margin-bottom: 1rem;
    }
  }
`;

export default {
  AttendeeList,
  AttendeeCardContainer,
};
