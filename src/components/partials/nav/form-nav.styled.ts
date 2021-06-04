import styled from 'styled-components';

import BaseNav from './base';

export const FormNavContainer = styled(BaseNav)`
  padding: 2rem 1.5rem;

  > div > a {
    text-decoration: none;
  }

  > div > a span:not(.icon) {
    display: none;
  }

  @media (min-width: 768px) {
    padding: 2rem 2.5rem;

    > div > a span:not(.icon) {
      display: inline;
    }
  }
`;

export default {
  FormNavContainer,
};
