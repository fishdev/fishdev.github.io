import React from 'react';
import classNames from 'classnames';
import pluralize from 'pluralize';

import { CourseBox } from './CourseBox';
import { Course } from '../interfaces';
import { computeOverallGrade } from '../util';
import { getData } from '../../../data';
import { DropdownList } from '../../../base';

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
        <div className="columns is-mobile is-variable is-1 is-vcentered">
          <div className="column is-narrow">{children}</div>
          <div className="column">
            {grade && (
              <p>
                &nbsp;
                {uni.scale}: <strong className="has-text-white">{grade.toFixed(2)}</strong>,{' '}
                {weight} {pluralize(uni.units, weight)}
              </p>
            )}
          </div>
          <div className="column is-narrow">
            <button
              className={classNames('button is-small', ta ? 'is-success' : 'is-outlined is-light')}
              onClick={this.toggleTA}>
              TA
            </button>
          </div>
          <div className="column is-narrow">
            <DropdownList
              items={[
                {
                  icon: 'fas fa-chalkboard',
                  url: '/courses',
                  name: 'All Terms',
                  active: !semester,
                },
              ].concat(
                Object.keys(uni.semesters).map((sem) => ({
                  icon: 'fas fa-book-open',
                  url: '/courses/' + encodeURIComponent(sem),
                  name: sem + (sem === uni.currentSemester ? '*' : ''),
                  active: sem === semester,
                }))
              )}>
              <a className={classNames('button is-small is-light', { 'is-outlined': !semester })}>
                {semester || (
                  <span className="icon">
                    <i className="fas fa-bars" />
                  </span>
                )}
              </a>
            </DropdownList>
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
