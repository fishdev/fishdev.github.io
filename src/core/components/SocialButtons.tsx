import React from 'react';
import classNames from 'classnames';

import { LevelGroup } from './LevelGroup';
import { social } from '../../assets/data';

export const SocialButtons: React.FC<any> = () => (
  <LevelGroup>
    {social.map(({ name, url, color, icon }) => (
      <a
        data-tooltip={name}
        href={url}
        className={classNames('has-text-' + color, {
          'tooltip has-tooltip-top': name,
        })}>
        <span className="icon is-large fa-2x">
          <i className={icon} />
        </span>
      </a>
    ))}
  </LevelGroup>
);
