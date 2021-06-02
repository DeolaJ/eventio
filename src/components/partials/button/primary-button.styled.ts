import styled from 'styled-components';
import BaseButton from './base';

export const PrimaryButtonContainer = styled(BaseButton)`
  background-color: var(--color-primary);

  &:hover {
    background-color: var(--color-primary-hover);
  }
`;

export default {
  PrimaryButtonContainer,
};
