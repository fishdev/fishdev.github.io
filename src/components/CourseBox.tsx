import React from 'react';

import { Course } from '../interfaces/Course';
import { CourseDetails } from './CourseDetails';

export const CourseBox: React.FC<Course> = course => (
  <div className="notification is-dark">
    <div className="columns is-mobile is-variable is-2 is-vcentered course-title">
      <div className="column is-narrow">
        <span className="tag is-medium is-black">
          <strong className="gradientbg">{course.id}</strong>
        </span>
      </div>
      <div className="column">
        <h3 className="title is-5">{course.name}</h3>
      </div>
    </div>
    <CourseDetails colored {...course} />
  </div>
);
