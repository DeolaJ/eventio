import { FC } from 'react';

import SpacedList from '../../containers/spaced-list';

type BaseNavProps = {
  className?: string;
};

const BaseNav: FC<BaseNavProps> = ({ className, children }) => {
  return (
    <nav className={className}>
      <SpacedList>{children}</SpacedList>
    </nav>
  );
};

export default BaseNav;
