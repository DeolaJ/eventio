import styled from 'styled-components';

import BaseNav from './base';

export const DashboardNavContainer = styled(BaseNav)`
  padding: 2rem;

  > div > a {
    text-decoration: none;
    display: none;
  }

  @media (min-width: 768px) {
    padding: 2rem 2.5rem;

    > div > a {
      text-decoration: none;
      display: block;
    }
  }
`;

export default {
  DashboardNavContainer,
};
