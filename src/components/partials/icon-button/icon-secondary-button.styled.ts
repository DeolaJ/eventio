import styled from 'styled-components';
import { IconPrimaryButtonContainer } from './icon-primary-button.styled';

export const IconSecondaryButtonContainer = styled(IconPrimaryButtonContainer)`
  background-color: var(--color-secondary);

  &:hover {
    background-color: var(--color-secondary-hover);
  }
`;

export default {
  IconSecondaryButtonContainer,
};
