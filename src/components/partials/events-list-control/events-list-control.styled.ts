import styled from 'styled-components';

export const EventsListControlContainer = styled.ul`
  display: flex;
  align-items: center;

  > li + li {
    margin-left: 0.5rem;
  }
`;

export const ControlButton = styled.button`
  height: 1.5rem;
  width: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: transparent;
  border: none;

  svg {
    fill: var(--color-secondary-light);
  }

  &.active svg {
    fill: var(--color-secondary);
  }
`;

export default {
  EventsListControlContainer,
  ControlButton,
};
