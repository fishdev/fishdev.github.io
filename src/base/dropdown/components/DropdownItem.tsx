import React from 'react';
import classNames from 'classnames';

import { Dropdown } from '../interfaces';
import { Link } from 'react-router-dom';

interface Props extends Dropdown {
  onClick(): void;
}

export class DropdownItem extends React.PureComponent<Props> {
  static defaultProps: Partial<Props> = {
    internal: false,
  };

  render() {
    const { onClick, internal, url, icon, name, description, active } = this.props;
    const DropdownElement = internal ? Link : 'a';
    return (
      <DropdownElement
        onClick={onClick}
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
