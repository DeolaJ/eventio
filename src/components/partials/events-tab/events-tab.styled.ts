import styled from 'styled-components';

export const EventsTabContainer = styled.ul`
  display: flex;
  align-items: center;

  > li + li {
    margin-left: 2rem;
  }
`;

export const TabButton = styled.button`
  font-weight: 600;
  font-size: 0.75rem;
  line-height: 1.5rem;
  cursor: pointer;
  background: transparent;
  border: none;
  letter-spacing: 1px;
  color: var(--color-secondary-light);

  &.active {
    color: var(--color-secondary);
  }
`;

export default {
  EventsTabContainer,
  TabButton,
};
