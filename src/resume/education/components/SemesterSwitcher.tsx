import React from 'react';
import classNames from 'classnames';

import { DropdownList } from '../../../base';

interface Props {
  isActive?: boolean;
  semesters: string[];
  currentSemester?: string;
  selected?: string;
}

export const SemesterSwitcher: React.FC<Props> = ({
  isActive,
  semesters,
  currentSemester,
  selected,
}) => (
  <DropdownList
    items={[
      {
        icon: 'fas fa-chalkboard',
        url: '/courses',
        name: 'All Terms',
        active: !selected,
        internal: true,
      },
    ].concat(
      semesters.map((sem) => ({
        icon: 'fas fa-book-open',
        url: '/courses/' + encodeURIComponent(sem),
        name: sem + (sem === currentSemester ? '*' : ''),
        active: sem === selected,
        internal: true,
      }))
    )}>
    <a className={classNames('button is-small is-light', { 'is-outlined': !selected || isActive })}>
      {selected || (
        <span className="icon">
          <i className="fas fa-bars" />
        </span>
      )}
    </a>
  </DropdownList>
);
