import React from 'react';

import { coursework } from '../assets/data';
import { CourseItem } from './CourseItem';

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
      <ul className="course-list">
        {coursework.slice(0, expanded ? coursework.length : 5).map(course => (
          <CourseItem key={course.number} {...course} showDetails={expanded} />
        ))}
        <li>
          <button onClick={this.toggleExpanded} className="button is-small">
            Show {expanded ? 'less' : 'more'}
          </button>
        </li>
      </ul>
    );
  }
}
