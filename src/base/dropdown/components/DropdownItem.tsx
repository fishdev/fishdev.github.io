import React from 'react';
import classNames from 'classnames';

import { Dropdown } from '../interfaces';
import { Link } from 'react-router-dom';

export class DropdownItem extends React.PureComponent<Dropdown> {
  static defaultProps: Partial<Dropdown> = {
    internal: false,
  };

  render() {
    const { internal, url, icon, name, description, active } = this.props;
    const DropdownElement = internal ? Link : 'a';
    return (
      <DropdownElement
        href={url}
        to={url}
        className={classNames('dropdown-item', { 'is-active': active })}>
        <div className="columns is-mobile is-variable is-1 is-vcentered">
          <div className="column is-narrow">
            <span className="icon">
              <i className={icon} />
            </span>
          </div>
          <div className="column is-narrow">
            <span>{name}</span>
            {description && (
              <span className="has-text-right">
                <br />
                <small>{description}</small>
              </span>
            )}
          </div>
        </div>
      </DropdownElement>
    );
  }
}
