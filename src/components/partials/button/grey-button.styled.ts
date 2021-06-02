import styled from 'styled-components';
import BaseButton from './base';

export const GreyButtonContainer = styled(BaseButton)`
  background-color: var(--color-grey);
  color: var(--color-secondary-light);

  &:hover {
    background-color: var(--color-grey-hover);
  }
`;

export default {
  GreyButtonContainer,
};
