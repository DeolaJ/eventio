import styled from 'styled-components';
import { BaseIconButtonContainer } from './icon-button.styled';

export const IconPrimaryButtonContainer = styled(BaseIconButtonContainer)`
  background-color: var(--color-primary);

  svg {
    max-width: 18px;
  }
`;

export default {
  IconPrimaryButtonContainer,
};
