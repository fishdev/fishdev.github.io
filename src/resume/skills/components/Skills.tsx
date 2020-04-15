import React from 'react';
import { Element as ScrollElement } from 'react-scroll';

import { languages, technologies } from '../../../assets/data';
import { SkillGroup } from './SkillGroup';
import { ResponsiveContainer } from '../../../core';

export const Skills: React.FC = () => (
  <ScrollElement name="skills" className="hero is-black is-small">
    <div className="hero-body">
      <ResponsiveContainer size="large">
        <SkillGroup skills={languages.concat(technologies)} />
      </ResponsiveContainer>
    </div>
  </ScrollElement>
);
