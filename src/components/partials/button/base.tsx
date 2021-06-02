import { FC } from 'react';
import { ButtonContainer } from './button.styled';

type ButtonTheme = {
  [key: string]: string;
};

type ButtonProps = {
  size: string;
  text: string;
  className?: string;
  onClick?: () => void;
};

const dimension: ButtonTheme = {
  sm: 'd-sm',
  lg: 'd-lg',
};

const fontSize: ButtonTheme = {
  sm: 'fs-sm',
  lg: 'fs-lg',
};

const lineHeight: ButtonTheme = {
  sm: 'lh-sm',
  lg: 'lh-lg',
};

const BaseButton: FC<ButtonProps> = ({ size, text, className, onClick }) => {
  return (
    <ButtonContainer
      className={`${dimension[size]} ${fontSize[size]} ${lineHeight[size]} ${className}`}
      onClick={onClick}>
      {text}
    </ButtonContainer>
  );
};

export default BaseButton;
