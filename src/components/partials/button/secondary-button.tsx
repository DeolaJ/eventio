import { FC } from 'react';
import { SecondaryButtonContainer } from './secondary-button.styled';

type ButtonProps = {
  size: string;
  text: string;
  className?: string;
  onClick?: () => void;
};

const SecondaryButton: FC<ButtonProps> = ({ size, text, className, onClick }) => {
  return <SecondaryButtonContainer size={size} className={className} text={text} onClick={onClick} />;
};

export default SecondaryButton;
