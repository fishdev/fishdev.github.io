import React from 'react';

import { university, coursework, gradeschool } from '../assets/data';
import { Section } from './Section';

interface State {
  expanded: boolean;
}

export class Education extends React.PureComponent<{}, State> {
  state: Readonly<State> = {
    expanded: false,
  };

  toggleExpanded = () => this.setState(({ expanded }) => ({ expanded: !expanded }));

  render() {
    const { expanded } = this.state;
    return (
      <Section name="Education">
        {university}
        <ul className="course-list">
          {coursework.slice(0, expanded ? coursework.length : 5).map(course => (
            <li key={course.number}>
              {course.number}: {course.name}
              {course.current && (
                <span className="tooltip" data-tooltip="Currently taking this course">
                  <strong className="has-text-primary">*</strong>
                </span>
              )}
            </li>
          ))}
          <li>
            <a onClick={this.toggleExpanded}>
              <small>Show {expanded ? 'less' : 'more'}</small>
            </a>
          </li>
        </ul>
        {gradeschool}
      </Section>
    );
  }
}
