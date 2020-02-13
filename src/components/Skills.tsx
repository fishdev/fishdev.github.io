import React from 'react';

import { languages, technologies } from '../assets/data';
import { SkillGroup } from './SkillGroup';
import { ResponsiveContainer } from './ResponsiveContainer';

export const Skills: React.FC = () => (
  <div className="hero is-black is-small">
    <div className="hero-body">
      <ResponsiveContainer size="large">
        <SkillGroup skills={languages.concat(technologies)} />
      </ResponsiveContainer>
    </div>
  </div>
);
