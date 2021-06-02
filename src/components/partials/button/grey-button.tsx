import { FC } from 'react';
import { GreyButtonContainer } from './grey-button.styled';

type ButtonProps = {
  size: string;
  text: string;
  className?: string;
  onClick?: () => void;
};

const GreyButton: FC<ButtonProps> = ({ size, text, className, onClick }) => {
  return <GreyButtonContainer size={size} className={className} text={text} onClick={onClick} />;
};

export default GreyButton;
