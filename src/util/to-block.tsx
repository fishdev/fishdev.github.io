import React from 'react';
import pluralize from 'pluralize';

import { Course, Block, Skill } from '../interfaces';
import { CourseSemester } from '../components/CourseSemester';

export const courseToBlock = ({
  id,
  name,
  semester,
  current,
  description,
  url,
}: Course): Block => ({
  id: id.toString(),
  name,
  extra: <CourseSemester isLarge={true} semester={semester} current={current} />,
  description: (
    <div>
      <p>
        <span className="tag is-medium is-dark">{id}</span>
        &nbsp;
        <span> at Carnegie Mellon University</span>
      </p>
      {description && <p>{description}</p>}
    </div>
  ),
  buttons: url
    ? [
        {
          url,
          icon: 'fas fa-info-circle',
          name: 'Coursicle information',
        },
      ]
    : [],
});

export const skillToBlock = ({ id, name, icon, years, url, description }: Skill): Block => ({
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
        <strong>{years}</strong> {pluralize('year', years)} experience
      </span>
    </span>
  ),
  url,
  description: 'Coming soon: view projects using this skill',
});
