import { FC } from 'react';
import { IconPrimaryButtonContainer } from './icon-primary-button.styled';

type IconButtonProps = {
  className?: string;
  onClick?: () => void;
};

const IconPrimaryButton: FC<IconButtonProps> = ({ children, className, onClick }) => {
  return (
    <IconPrimaryButtonContainer className={className} onClick={onClick}>
      {children}
    </IconPrimaryButtonContainer>
  );
};

export default IconPrimaryButton;
