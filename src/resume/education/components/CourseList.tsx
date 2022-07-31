import React, { useState } from 'react';
import classNames from 'classnames';
import pluralize from 'pluralize';

import { CourseBox } from './CourseBox';
import { Course } from '../interfaces';
import { computeOverallGrade } from '../util';
import { getData } from '../../../data';
import { DropdownList } from '../../../base';
import { SemesterSwitcher } from './SemesterSwitcher';

interface Props {
  coursework: Course[];
  university: string;
  children?: React.ReactNode;
}

interface State {
  ta: boolean;
}

export const CourseList = ({ coursework, university, children }: Props) => {
  const [ta, setTA] = useState(false);
  const toggleTA = () => setTA(!ta);

  const [semester, setSemester] = useState<string | undefined>(undefined);

  const courses = coursework.filter((course) => {
    if (semester && course.semester !== semester) return false;
    if (!semester && course.hidden) return false;
    if (ta && !course.ta) return false;
    return true;
  });

  const uni = getData().resume.education.universities[university];
  const grade = semester
    ? uni.semesters[semester].grade
    : computeOverallGrade(Object.values(uni.semesters));
  const weight = semester
    ? uni.semesters[semester].weight
    : Object.values(uni.semesters).reduce((acc, { weight }) => acc + weight, 0);

  return (
    <div>
      <div className="level is-mobile">
        <div className="level-left">
          {children && <div className="level-item">{children}</div>}
          <div className="level-item">
            {grade && (
              <p>
                {uni.scale}: <strong>{grade.toFixed(2)}</strong>, {weight}{' '}
                {pluralize(uni.units, weight)}
              </p>
            )}
          </div>
        </div>
        <div className="level-right">
          <div className="level-item">
            <button
              className={classNames(
                'button is-small',
                ta ? 'is-success' : 'is-outlined is-warning'
              )}
              onClick={toggleTA}>
              TA
            </button>
          </div>
          <div className="level-item">
            <SemesterSwitcher
              semesters={Object.keys(uni.semesters)}
              currentSemester={uni.currentSemester}
              selected={semester}
              handleChange={setSemester}
            />
          </div>
        </div>
      </div>
      <div className="horizontal-scroller columns">
        {courses.map((course) => (
          <div key={course.id} className="column is-half">
            <CourseBox {...course} />
          </div>
        ))}
      </div>
    </div>
  );
};
