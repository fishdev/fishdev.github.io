import React from 'react';

import { LevelGroup } from './LevelGroup';
import { social } from '../assets/data';
import { Button } from './Button';

export const SocialButtons: React.FC<Partial<React.ComponentProps<typeof Button>>> = ({ size }) => (
  <LevelGroup>
    {social.map(item => (
      <Button key={item.name} {...item} size={size} />
    ))}
  </LevelGroup>
);
