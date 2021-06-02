import styled from 'styled-components';

export const LayoutContainer = styled.main<{ className?: string }>`
  background-color: #fff;

  &.private {
    background-color: #f9f9fb;
  }
`;

export default {
  LayoutContainer,
};
