import styled from 'styled-components';

export const EventsListControlContainer = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  margin: 0;
  padding: 0;

  > li + li {
    margin-left: 0.5rem;
  }
`;

export const ControlButton = styled.button`
  height: 24px;
  width: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: transparent;
  border: none;

  svg path {
    fill: var(--color-secondary-light);
  }

  &.active svg path {
    fill: var(--color-secondary);
  }
`;

export default {
  EventsListControlContainer,
  ControlButton,
};
