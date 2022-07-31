import React from 'react';
import classNames from 'classnames';

import { DropdownList } from '../../../base';

interface Props {
  isActive?: boolean;
  semesters: string[];
  currentSemester?: string;
  selected?: string;
  handleChange(semester: string | undefined): void;
}

export const SemesterSwitcher: React.FC<Props> = ({
  isActive,
  semesters,
  currentSemester,
  selected,
  handleChange,
}) => (
  <DropdownList
    items={[
      <a className="dropdown-item" onClick={() => handleChange(undefined)}>
        <span className="icon-text">
          <span className="icon">
            <i className="fas fa-chalkboard" />
          </span>
          <span>All Terms</span>
        </span>
      </a>,
    ].concat(
      semesters.map((sem) => (
        <a
          className={classNames('dropdown-item', { 'is-active': sem === selected })}
          onClick={() => handleChange(sem)}>
          <span className="icon-text">
            <span className="icon">
              <i className="fas fa-book-open" />
            </span>
            <span>{sem + (sem === currentSemester ? '*' : '')}</span>
          </span>
        </a>
      ))
    )}>
    <a
      className={classNames('button is-small is-warning', {
        'is-outlined': !selected || isActive,
      })}>
      {selected || (
        <span className="icon">
          <i className="fas fa-bars" />
        </span>
      )}
    </a>
  </DropdownList>
);
