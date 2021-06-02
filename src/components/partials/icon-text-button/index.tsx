import { FC } from 'react';

import { IconTextButtonContainer } from './icon-text-button.styled';

type IconTextButtonProps = {
  className?: string;
  text?: string;
  onClick?: () => void;
};

const IconTextButton: FC<IconTextButtonProps> = ({ className, children, text, onClick }) => {
  return (
    <IconTextButtonContainer className={className} onClick={onClick}>
      <span className="icon">{children}</span>
      <span>{text}</span>
    </IconTextButtonContainer>
  );
};

export default IconTextButton;
