import React from 'react';
import pluralize from 'pluralize';

import { Course, Block, Skill } from '../interfaces';
import { CourseDetails } from '../components/CourseDetails';

export const courseToBlock = (course: Course): Block => ({
  id: course.id.toString(),
  name: course.name,
  description: <CourseDetails {...course} />,
});

export const skillToBlock = (
  { id, name, icon, years, url, description }: Skill,
  longer = true
): Block => ({
  id,
  name,
  extra: (
    <span>
      {icon && (
        <span>
          <span className="icon">
            <i className={icon} />
          </span>
          &nbsp;
        </span>
      )}
      <span>
        <strong>{years}</strong> {pluralize('year', years)}
        {longer && ' experience'}
      </span>
    </span>
  ),
  url,
  description,
});
