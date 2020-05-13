import React from 'react';
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
  semester?: string;
}

interface State {
  ta: boolean;
}

export class CourseList extends React.PureComponent<Props, State> {
  state: Readonly<State> = {
    ta: false,
  };

  toggleTA = () => this.setState(({ ta }) => ({ ta: !ta }));

  render() {
    const { ta } = this.state;
    const { children, semester, coursework, university } = this.props;

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
            <div className="level-item">{children}</div>
            <div className="level-item">
              {grade && (
                <p>
                  {uni.scale}: <strong className="has-text-white">{grade.toFixed(2)}</strong>,{' '}
                  {weight} {pluralize(uni.units, weight)}
                </p>
              )}
            </div>
          </div>
          <div className="level-right">
            <div className="level-item">
              <button
                className={classNames(
                  'button is-small',
                  ta ? 'is-success' : 'is-outlined is-light'
                )}
                onClick={this.toggleTA}>
                TA
              </button>
            </div>
            <div className="level-item">
              <SemesterSwitcher
                semesters={Object.keys(uni.semesters)}
                currentSemester={uni.currentSemester}
                selected={semester}
              />
            </div>
          </div>
        </div>
        <div className="columns is-multiline">
          {courses.map((course) => (
            <div key={course.id} className="column is-half">
              <CourseBox {...course} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
