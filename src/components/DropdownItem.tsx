import React from 'react';

import { Dropdown } from '../interfaces';
import { Link } from 'react-router-dom';

export class DropdownItem extends React.PureComponent<Dropdown> {
  static defaultProps: Partial<Dropdown> = {
    internal: false,
  };

  render() {
    const { internal, url, icon, name, description } = this.props;
    const DropdownElement = internal ? Link : 'a';
    return (
      <DropdownElement href={url} to={url} className="dropdown-item">
        <span className="icon">
          <i className={icon} />
        </span>
        &nbsp;
        <span>{name}</span>
        {description && (
          <span className="has-text-right">
            <br />
            <small>{description}</small>
          </span>
        )}
      </DropdownElement>
    );
  }
}
