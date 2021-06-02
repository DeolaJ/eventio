import { FC } from 'react';
import { PrimaryButtonContainer } from './primary-button.styled';

type ButtonProps = {
  size: string;
  text: string;
  className?: string;
  onClick?: () => void;
};

const PrimaryButton: FC<ButtonProps> = ({ size, text, className, onClick }) => {
  return <PrimaryButtonContainer size={size} className={className} text={text} onClick={onClick} />;
};

export default PrimaryButton;
