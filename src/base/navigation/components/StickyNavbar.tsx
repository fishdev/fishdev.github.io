import React from 'react';
import { StickyChildArgs, Sticky } from 'react-sticky';
import classNames from 'classnames';

import { Navbar } from './Navbar';

interface Props {
  computeProps?: (sticky: StickyChildArgs) => React.ComponentProps<typeof Navbar>;
}

export const StickyNavbar: React.FC<Props> = ({ computeProps }) => (
  <Sticky topOffset={1}>
    {sticky => (
      <div className={classNames({ 'sticky-header': sticky.isSticky })} style={sticky.style}>
        <Navbar {...(computeProps ? computeProps(sticky) : {})} />
      </div>
    )}
  </Sticky>
);
