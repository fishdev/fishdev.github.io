import React from 'react';

import { Course } from '../interfaces/Course';
import { CourseDetails } from './CourseDetails';
import { CourseTag } from './CourseTag';

export const CourseBox: React.FC<Course> = (course) => (
  <div className="notification is-warning has-shadow">
    <div className="columns is-mobile is-variable is-2 is-vcentered course-title">
      <div className="column is-narrow">
        <CourseTag animated text={course.id.toString()} />
      </div>
      <div className="column">
        <h3 className="title is-5">{course.name}</h3>
      </div>
    </div>
    <CourseDetails colored {...course} />
  </div>
);
