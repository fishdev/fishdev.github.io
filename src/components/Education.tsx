import React from 'react';

import { university, coursework, gradeschool } from '../assets/data';
import { Section } from './Section';

export const Education: React.FC = () => (
  <Section name="Education">
    {university}
    <ul>
      {coursework.map(course => (
        <li>
          {course.number}: {course.name}
          {course.current && '*'}
        </li>
      ))}
    </ul>
    {gradeschool}
  </Section>
);
