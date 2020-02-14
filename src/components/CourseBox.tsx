import React from 'react';

import { Course } from '../interfaces/Course';

export const CourseBox: React.FC<Course> = ({
  id,
  name,
  semester,
  current,
  url,
  ta,
  description,
}) => (
  <div className="notification is-dark">
    <div className="columns is-mobile is-variable is-2 is-vcentered course-title">
      <div className="column is-narrow">
        <span className="tag is-medium is-black">
          <strong className="gradientbg">{id}</strong>
        </span>
      </div>
      <div className="column">
        <h3 className="title is-5">{name}</h3>
      </div>
    </div>
    <p>
      {current ? (
        <span className="has-text-danger">Currently taking this course.</span>
      ) : (
        <span>
          Taken in <span className="has-text-warning">{semester}</span>.
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
    {ta && <p className="has-text-success">Teaching assistant: {ta.join(', ')}</p>}
    {description && <p className="has-text-grey-light">{description}</p>}
  </div>
);
