import styled from 'styled-components';

export const AttendeePillContainer = styled.li`
  background-color: var(--color-grey);
  color: var(--color-grey-dark);
  border-radius: 100px;
  height: 32px;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  font-size: 13px;
  line-height: 31px;

  &.owner {
    border: 2px solid;
    border-color: var(--color-grey);
    box-sizing: border-box;
    background-color: white;
  }
`;

export default {
  AttendeePillContainer,
};
