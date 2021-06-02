import styled from 'styled-components';
import BaseButton from './base';

export const SecondaryButtonContainer = styled(BaseButton)`
  background-color: var(--color-secondary);

  &:hover {
    background-color: var(--color-secondary-hover);
  }
`;

export default {
  SecondaryButtonContainer,
};
