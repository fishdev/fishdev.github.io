import React from 'react';
import pluralize from 'pluralize';

import { Block } from '../interfaces';
import { Course, CourseDetails } from '../../education';
import { Skill } from '../../skills';

export const courseToBlock = (course: Course): Block => ({
  id: course.id.toString(),
  name: course.name,
  description: <CourseDetails {...course} />,
});

const currentYear = new Date().getFullYear();

export const skillToBlock = (
  { id, name, icon, year, url, description }: Skill,
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
        <strong>{currentYear - year}</strong> {pluralize('year', currentYear - year)}
        {longer && ' experience'}
      </span>
    </span>
  ),
  url,
  description,
});