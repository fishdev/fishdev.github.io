import React from 'react';

import { Skill } from '../interfaces';
import { SkillContainer } from './SkillContainer';

export const SkillGroup: React.FC<{ skills: Skill[] }> = ({ skills }) => (
  <div className="field is-grouped is-grouped-multiline skill-group">
    {skills.map(skill => (
      <div key={skill.name} className="control">
        <SkillContainer {...skill} />
      </div>
    ))}
  </div>
);
