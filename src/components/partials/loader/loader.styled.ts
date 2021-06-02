import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const LoaderContainer = styled.span`
  animation: ${rotate} infinite 700ms;

  svg {
    background: conic-gradient(
      from 90deg at 50% 50%,
      rgba(255, 255, 255, 0.187047) -23.59deg,
      rgba(0, 0, 0, 0.244084) 6.81deg,
      rgba(255, 255, 255, 0.187047) 336.41deg,
      rgba(0, 0, 0, 0.244084) 366.81deg
    );
  }

  &.light svg {
    background: conic-gradient(
      from 90deg at 50% 50%,
      rgba(255, 255, 255, 0.187047) -23.59deg,
      #fff 10.06deg,
      rgba(255, 255, 255, 0.187047) 336.41deg,
      #fff 370.06deg
    );
  }
`;

export default {
  LoaderContainer,
};
