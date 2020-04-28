import React from 'react';
import classNames from 'classnames';

import { LevelGroup } from '.';
import data from '../../../assets/data';

export const SocialButtons: React.FC<any> = () => (
  <LevelGroup>
    {data.links.social.map(({ name, url, color, icon }) => (
      <a
        data-tooltip={name}
        key={name}
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
