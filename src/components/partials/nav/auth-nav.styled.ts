import styled from 'styled-components';

import BaseNav from './base';

export const AuthNavContainer = styled(BaseNav)`
  .auth-switch {
    display: none;
  }

  @media (min-width: 768px) {
    .auth-switch {
      display: block;
    }
  }
`;

export default {
  AuthNavContainer,
};
