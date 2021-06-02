import styled from 'styled-components';

export const AttendeeCardContainer = styled.section`
  padding: 1.625rem 2rem;
  min-height: 296px;

  h4 {
    font-weight: 400;
    font-size: 1.375rem;
    line-height: 2rem;
    margin-top: 0;
    margin-bottom: 1.375rem;
  }
`;

export const AttendeeList = styled.ul`
  margin: 0;
  list-style-type: none;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  li {
    margin-bottom: 1rem;
    margin-right: 0.5rem;
  }
`;

export default {
  AttendeeList,
  AttendeeCardContainer,
};
