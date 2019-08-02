import React from 'react';

import { Skill } from '../interfaces';
import { SkillTag } from './SkillTag';

export const SkillGroup: React.FC<{ skills: Skill[] }> = ({ skills }) => (
  <div className="field is-grouped is-grouped-multiline skill-group">
    {skills.map(skill => (
      <div className="control">
        <SkillTag key={skill.name} {...skill} />
      </div>
    ))}
  </div>
);
