import React from 'react';
import classNames from 'classnames';

import { ColorButton } from '../interfaces';

interface Props extends ColorButton {
  size?: 'is-small' | 'is-large';
}

export const SocialButton: React.FC<Props> = ({ color, url, icon, name, title, size }) => (
  <a
    className={classNames('button is-rounded is-outlined', 'is-' + color, size, {
      'tooltip is-tooltip-bottom': title,
    })}
    href={url}
    data-tooltip={title}>
    <span className="icon is-small">
      <i className={icon} />
    </span>
    <span>{name}</span>
  </a>
);
