import React from 'react';

import { coursework } from '../assets/data';
import { CourseBullet } from './CourseBullet';
import { teachingAsCourses } from '../util';

interface State {
  expanded: boolean;
}

export class CourseList extends React.PureComponent<{}, State> {
  state: Readonly<State> = {
    expanded: false,
  };

  toggleExpanded = () => this.setState(({ expanded }) => ({ expanded: !expanded }));

  render() {
    const { expanded } = this.state;
    return (
      <React.Fragment>
        <ul className="course-list">
          {coursework.slice(0, expanded ? coursework.length : 5).map(course => (
            <CourseBullet key={course.id} {...course} showDetails={expanded} />
          ))}
          <li>
            <button onClick={this.toggleExpanded} className="button is-small">
              Show {expanded ? 'less' : 'more'}
            </button>
          </li>
        </ul>
        <p>
          Of these, I have been a <strong>teaching assistant</strong> for:
        </p>
        <ul>
          {teachingAsCourses.map(course => (
            <li key={course.id}>
              {course.id}: {course.name} ({course.semester})
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}
