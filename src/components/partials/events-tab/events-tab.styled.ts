import styled from 'styled-components';

export const EventsTabContainer = styled.ul`
  display: none;
  align-items: center;
  list-style-type: none;
  margin: 0;
  padding: 0;

  > li + li {
    margin-left: 2rem;
  }

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const EventsTabDropdown = styled.div`
  select {
    border: none;
    padding: 0 1rem 0 0;
    font-weight: 600;
    font-size: 0.75rem;
    line-height: 1.5rem;
    text-transform: uppercase;
    color: var(--color-secondary);
    -webkit-appearance: none;
    letter-spacing: 1px;
    -moz-appearance: none;
    outline: none;
    background: transparent;
    background-repeat: no-repeat;
    background-position-x: calc(100%);
    background-position-y: 40%;
  }

  span {
    color: var(--color-secondary-light);
    font-weight: 600;
    font-size: 0.75rem;
    line-height: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const TabButton = styled.button`
  font-weight: 600;
  font-size: 0.75rem;
  line-height: 1.5rem;
  cursor: pointer;
  background: transparent;
  text-transform: uppercase;
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
  EventsTabDropdown,
};
