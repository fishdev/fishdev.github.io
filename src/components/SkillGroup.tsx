import React from 'react';

import { Skill } from '../interfaces';
import { SkillTag } from './SkillTag';

export const SkillGroup: React.FC<{ skills: Skill[] }> = ({ skills }) => (
  <div className="tags">
    {skills.map(skill => (
      <SkillTag key={skill.name} {...skill} />
    ))}
  </div>
);
