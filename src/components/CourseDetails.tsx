import React from 'react';
import classNames from 'classnames';

import { Course } from '../interfaces';

interface Props extends Course {
  colored?: boolean;
}

export const CourseDetails: React.FC<Props> = ({
  colored,
  current,
  semester,
  url,
  ta,
  description,
}) => (
  <div className="course-details">
    <p>
      {current ? (
        <span className="has-text-danger">Currently taking this course.</span>
      ) : (
        <span>
          Taken in <span className={classNames({ 'has-text-warning': colored })}>{semester}</span>.
        </span>
      )}
      {url && (
        <React.Fragment>
          &nbsp;&nbsp;
          <a href={url}>
            <span>Description</span>
            &nbsp;
            <span className="icon is-small">
              <i className="fas fa-arrow-right" />
            </span>
          </a>
        </React.Fragment>
      )}
    </p>
    {ta && (
      <p className={classNames({ 'has-text-success': colored })}>
        Teaching assistant: {ta.join(', ')}
      </p>
    )}
    {description && <p className={classNames({ 'has-text-grey-light': colored })}>{description}</p>}
  </div>
);
