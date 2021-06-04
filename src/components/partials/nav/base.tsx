import { FC } from 'react';

import SpacedList from '../../containers/spaced-list/spaced-list';
import { BaseNavContainer } from './nav.styled';

type BaseNavProps = {
  className?: string;
};

const BaseNav: FC<BaseNavProps> = ({ className, children }) => {
  return (
    <BaseNavContainer className={className}>
      <SpacedList>{children}</SpacedList>
    </BaseNavContainer>
  );
};

export default BaseNav;
