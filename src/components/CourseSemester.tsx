import React from 'react';

import { Course } from '../interfaces';

interface Props extends Partial<Course> {
  isLarge: boolean;
}

export class CourseSemester extends React.PureComponent<Props> {
  static defaultProps: Props = {
    isLarge: false,
  };

  render() {
    const { isLarge, current, semester } = this.props;
    const Element = isLarge ? 'span' : 'small';
    return (
      <Element className={current ? 'has-text-primary' : 'has-text-grey'}>
        {current ? (
          'Currently taking this course'
        ) : (
          <span>
            Taken in <b>{semester}</b> semester
          </span>
        )}
      </Element>
    );
  }
}
