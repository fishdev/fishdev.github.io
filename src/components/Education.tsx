import React from 'react';

import { university, gradeschool } from '../assets/data';
import { Section } from './Section';
import { CourseList } from './CourseList';

export const Education: React.FC = () => (
  <Section name="education">
    {university}
    <CourseList />
    {gradeschool}
  </Section>
);
