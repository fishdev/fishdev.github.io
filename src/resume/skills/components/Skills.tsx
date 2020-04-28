import React from 'react';
import { Element as ScrollElement } from 'react-scroll';

import data from '../../../assets/data';
import { SkillGroup } from './SkillGroup';
import { ResponsiveContainer } from '../../../base';

export const Skills: React.FC = () => (
  <ScrollElement name="skills" className="hero is-black is-small">
    <div className="hero-body">
      <ResponsiveContainer size="large">
        <SkillGroup skills={data.resume.skills.map(({ data }) => data).flat()} />
      </ResponsiveContainer>
    </div>
  </ScrollElement>
);
