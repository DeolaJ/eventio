import { FC, ReactNode } from 'react';
import { DangerButtonContainer } from './danger-button.styled';

type ButtonProps = {
  size: string;
  text: string | ReactNode;
  className?: string;
  onClick?: () => void;
};

const DangerButton: FC<ButtonProps> = ({ size, text, className, onClick }) => {
  return <DangerButtonContainer size={size} className={className} text={text} onClick={onClick} />;
};

export default DangerButton;
