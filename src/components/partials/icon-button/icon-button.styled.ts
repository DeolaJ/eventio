import styled from 'styled-components';

export const BaseIconButtonContainer = styled.button`
  border-radius: 50%;
  height: 56px;
  width: 56px;
  cursor: pointer;
  background: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 6px 9px rgba(0, 0, 0, 0.15);

  img {
    max-width: 100%;
  }
`;

export default {
  BaseIconButtonContainer,
};
