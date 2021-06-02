import styled from 'styled-components';

export const EventsLoaderContainer = styled.article`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;

  > * {
    width: 63px;
  }
`;

export default {
  EventsLoaderContainer,
};
