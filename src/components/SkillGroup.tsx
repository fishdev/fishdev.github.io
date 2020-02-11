import React from 'react';

import { Skill } from '../interfaces';
import { SkillContainer } from './SkillContainer';

export const SkillGroup: React.FC<{ skills: Skill[] }> = ({ skills }) => (
  <div className="columns is-multiline is-mobile skill-group">
    {skills.map(skill => (
      <div key={skill.name} className="column is-narrow">
        <SkillContainer {...skill} />
      </div>
    ))}
  </div>
);
