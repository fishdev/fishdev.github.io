import React from 'react';
import classNames from 'classnames';

import { Dropdown } from '../interfaces';
import { DropdownItem } from './DropdownItem';

interface Props {
  staticItems?: React.ReactElement;
  items?: Dropdown[];
  hoverable?: boolean;
  alignment?: 'is-left' | 'is-right';
  dropup?: boolean;
}

interface State {
  isActive: boolean;
}

export class DropdownList extends React.PureComponent<Props, State> {
  node: React.RefObject<HTMLDivElement> = React.createRef();

  state: Readonly<State> = {
    isActive: false,
  };

  static defaultProps: Partial<Props> = {
    hoverable: false,
    alignment: 'is-right',
    dropup: false,
  };

  componentWillMount() {
    document.addEventListener('mousedown', this.handleClick, false);
  }

  componentWillUnmount() {
    document.addEventListener('mousedown', this.handleClick, false);
  }

  handleClick = (event: MouseEvent) => {
    if (
      event.target instanceof HTMLElement &&
      this.node.current &&
      this.node.current.contains(event.target)
    )
      return;
    this.hide();
  };

  show = () => this.setState({ isActive: true });
  hide = () => this.setState({ isActive: false });

  render() {
    const { hoverable, dropup, alignment, staticItems, items, children } = this.props;
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
          {React.Children.map(children, child =>
            React.cloneElement(child as React.ReactElement, {
              onClick: this.show,
            })
          )}
        </div>
        <div className="dropdown-menu" role="menu">
          <div className="dropdown-content">
            {staticItems}
            {staticItems && items && <hr className="dropdown-divider" />}
            {items && items.map(dropdown => <DropdownItem key={dropdown.name} {...dropdown} />)}
          </div>
        </div>
      </div>
    );
  }
}
