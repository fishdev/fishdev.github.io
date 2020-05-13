import React from 'react';
import classNames from 'classnames';
import onClickOutside from 'react-onclickoutside';

import { Dropdown } from '../interfaces';
import { DropdownItem } from './DropdownItem';

interface Props {
  staticItems?: React.ReactElement;
  items?: Dropdown[];
  hoverable?: boolean;
  alignment?: 'is-left' | 'is-right';
  dropup?: boolean;
  animated?: boolean;
}

interface State {
  isActive: boolean;
}

@(onClickOutside as any)
export class DropdownList extends React.PureComponent<Props, State> {
  state: Readonly<State> = {
    isActive: false,
  };

  static defaultProps: Partial<Props> = {
    hoverable: false,
    alignment: 'is-right',
    dropup: false,
    animated: false,
  };

  toggleActive = () => this.setState(({ isActive }) => ({ isActive: !isActive }));
  handleClickOutside = () => this.setState({ isActive: false });

  render() {
    const { hoverable, dropup, alignment, animated, staticItems, items, children } = this.props;
    const { isActive } = this.state;
    return (
      <div
        className={classNames(
          'dropdown',
          { 'is-hoverable': hoverable },
          { 'is-up': dropup },
          alignment,
          {
            'is-active': isActive,
          }
        )}>
        <div className="dropdown-trigger">
          {React.Children.map(children, (child) =>
            React.cloneElement(child as React.ReactElement, {
              onClick: this.toggleActive,
              isActive,
            })
          )}
        </div>
        <div className="dropdown-menu" role="menu">
          <div
            className={classNames('dropdown-content has-background-light', {
              'animated faster bounceIn': animated,
            })}>
            {staticItems}
            {staticItems && items && <hr className="dropdown-divider" />}
            {items &&
              items.map((dropdown) => (
                <DropdownItem key={dropdown.name} {...dropdown} onClick={this.toggleActive} />
              ))}
          </div>
        </div>
      </div>
    );
  }
}
