import React from 'react';
import classNames from 'classnames';

import { Dropdown } from '../interfaces';
import { DropdownItem } from './DropdownItem';

interface Props {
  staticItems?: React.ReactNode;
  items?: Dropdown[];
  hoverable?: boolean;
  alignment?: 'is-left' | 'is-right';
}

interface State {
  isActive: boolean;
}

export class DropdownList extends React.PureComponent<Props, State> {
  state: Readonly<State> = {
    isActive: false,
  };

  static defaultProps: Partial<Props> = {
    hoverable: false,
    alignment: 'is-right',
  };

  toggleActive = () => this.setState(({ isActive }) => ({ isActive: !isActive }));

  render() {
    const { hoverable, alignment, staticItems, items, children } = this.props;
    const { isActive } = this.state;
    return (
      <div
        className={classNames('dropdown', { 'is-hoverable': hoverable }, alignment, {
          'is-active': isActive,
        })}>
        <div className="dropdown-trigger">
          <div onClick={this.toggleActive}>{children}</div>
        </div>
        <div className="dropdown-menu" role="menu">
          <div className="dropdown-content">
            {staticItems}
            {staticItems && <hr className="dropdown-divider" />}
            {items && items.map(dropdown => <DropdownItem key={dropdown.name} {...dropdown} />)}
          </div>
        </div>
      </div>
    );
  }
}
