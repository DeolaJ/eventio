import { FC, ReactNode } from 'react';
import { PrimaryButtonContainer } from './primary-button.styled';

type ButtonProps = {
  size: string;
  text: string | ReactNode;
  className?: string;
  type?: 'submit' | 'reset' | 'button';
  onClick?: () => void;
};

const PrimaryButton: FC<ButtonProps> = ({ size, text, className, onClick, type }) => {
  return <PrimaryButtonContainer size={size} className={className} text={text} onClick={onClick} type={type} />;
};

export default PrimaryButton;
