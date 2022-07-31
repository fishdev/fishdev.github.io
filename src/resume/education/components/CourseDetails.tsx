import React from 'react';
import classNames from 'classnames';

import { Course } from '../interfaces';
import { getCurrentSemester } from '../util';

interface Props extends Course {
  colored?: boolean;
}

export const CourseDetails: React.FC<Props> = ({
  colored,
  institution,
  semester,
  url,
  ta,
  description,
}) => (
  <div className="course-details fancify-links fancify-links-light">
    <p>
      {semester === getCurrentSemester(institution) ? (
        <span className="has-text-danger">Currently taking this course.</span>
      ) : (
        <span>Taken in {semester}.</span>
      )}
      {url && (
        <React.Fragment>
          &nbsp;&nbsp;
          <a href={url}>
            <span>What's this course about?</span>
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
