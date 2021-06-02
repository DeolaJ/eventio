import styled from 'styled-components';

export const AttendeesWrapperContainer = styled.div`
  display: flex;
  align-items: center;

  > * + * {
    margin-left: 0.25rem;
  }

  span {
    height: 1.5rem;
    width: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .attendees {
    height: 1.5rem;
    display: flex;
    align-items: center;
  }
`;

export default {
  AttendeesWrapperContainer,
};
