import React from 'react';

import { university, coursework, gradeschool } from '../assets/data';
import Section from './Section';

class Education extends React.Component {
  render() {
    return (
      <Section name="Education">
        {university}
        <ul>
          {coursework.map(course => (
            <li>
              {course.number}: {course.name}
              {course.current ? '*' : ''}
            </li>
          ))}
        </ul>
        {gradeschool}
      </Section>
    );
  }
}

export default Education;
