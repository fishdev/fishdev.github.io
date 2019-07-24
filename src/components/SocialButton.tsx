import React from 'react';
import classNames from 'classnames';

import { ColorButton } from '../interfaces';

interface Props {
  size?: string;
}

export const SocialButton: React.FC<ColorButton & Props> = ({
  color,
  url,
  icon,
  name,
  title,
  size,
}) => (
  <p className="control">
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
  </p>
);
