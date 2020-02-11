import React from 'react';

import { LevelGroup } from './LevelGroup';
import { social } from '../assets/data';

export const SocialButtons: React.FC<any> = () => (
  <LevelGroup>
    {social.map(item => (
      <a href={item.url} className={'has-text-' + item.color}>
        <span className="icon is-large fa-2x">
          <i className={item.icon} />
        </span>
      </a>
    ))}
  </LevelGroup>
);
