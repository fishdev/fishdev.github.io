import React from 'react';
import classNames from 'classnames';

import { ColorButton } from '../interfaces';

export const SocialButton: React.FC<ColorButton> = ({ color, url, icon, name, title }) => (
  <p className="control">
    <a
      className={classNames('button is-rounded is-outlined', 'is-' + color, {
        'tooltip is-tooltip-bottom': title,
      })}
      href={url}
      data-tooltip={title}>
      <span className="icon is-small">
        <i className={icon} />
      </span>
      <span>{name}</span>
    </a>
  </p>
);
