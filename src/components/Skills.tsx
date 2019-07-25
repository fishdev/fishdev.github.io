import React from 'react';

import { languages, technologies } from '../assets/data';
import { Section } from './Section';
import { SkillGroup } from './SkillGroup';

export const Skills: React.FC = () => (
  <Section name="skills">
    <h4>Languages</h4>
    <SkillGroup skills={languages} />
    <h4>Technologies</h4>
    <SkillGroup skills={technologies} />
  </Section>
);
