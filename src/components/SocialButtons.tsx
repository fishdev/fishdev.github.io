import React from 'react';

import { LevelGroup } from './LevelGroup';
import { social } from '../assets/data';
import { Button } from './Button';

interface Props {
  size?: 'is-small' | 'is-large';
}

export const SocialButtons: React.FC<Props> = ({ size }) => (
  <LevelGroup>
    {social.map(item => (
      <Button key={item.name} {...item} size={size} />
    ))}
  </LevelGroup>
);
