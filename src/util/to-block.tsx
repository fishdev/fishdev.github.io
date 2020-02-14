import React from 'react';
import pluralize from 'pluralize';

import { Course, Block, Skill } from '../interfaces';
import { CourseSemester } from '../components/CourseSemester';
import { UNIVERSITY } from '../assets/data';

export const courseToBlock = ({
  id,
  name,
  semester,
  current,
  ta,
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
        <span> at {UNIVERSITY}</span>
      </p>
      {ta && (
        <p>
          Served as a <strong>teaching assistant</strong>: {ta.join(', ')}
        </p>
      )}
      {description && <p>{description}</p>}
    </div>
  ),
  url,
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
