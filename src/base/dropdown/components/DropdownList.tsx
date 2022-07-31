import React, { Fragment } from 'react';
import classNames from 'classnames';
import onClickOutside from 'react-onclickoutside';

import '../styles/dropdown.scss';

interface Props {
  staticItems?: React.ReactElement[];
  items?: React.ReactElement[];
  hoverable?: boolean;
  alignment?: 'left' | 'right';
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
    alignment: 'right',
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
          `is-${alignment}`,
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
            {staticItems && (
              <Fragment>
                {staticItems}
                {items && <hr className="dropdown-divider" />}
              </Fragment>
            )}
            {items &&
              items.map((item) =>
                React.cloneElement(item, {
                  onClick: (e: React.MouseEvent<HTMLElement>) => {
                    this.toggleActive();
                    if (item.props.onClick) {
                      item.props.onClick(e);
                    }
                  },
                })
              )}
          </div>
        </div>
      </div>
    );
  }
}
