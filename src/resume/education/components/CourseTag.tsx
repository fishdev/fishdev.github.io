import React from 'react';
import classNames from 'classnames';

interface Props {
  animated: boolean;
  text: string;
}

export const CourseTag: React.FC<Props> = ({ animated, text }) => (
  <span className="tag is-medium is-black">
    <strong className={classNames('gradientbg', { 'animated faster flash': animated })}>
      {text}
    </strong>
  </span>
);
