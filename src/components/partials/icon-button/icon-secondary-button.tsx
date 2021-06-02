import { FC } from 'react';
import { IconSecondaryButtonContainer } from './icon-secondary-button.styled';

type IconButtonProps = {
  className?: string;
  onClick?: () => void;
};

const IconSecondaryButton: FC<IconButtonProps> = ({ children, className, onClick }) => {
  return (
    <IconSecondaryButtonContainer className={className} onClick={onClick}>
      {children}
    </IconSecondaryButtonContainer>
  );
};

export default IconSecondaryButton;
