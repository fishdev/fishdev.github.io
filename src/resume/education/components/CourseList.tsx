import React from 'react';
import classNames from 'classnames';

import { CourseBox } from './CourseBox';
import { Course } from '../interfaces';
import { computeOverallGrade } from '../util';
import { getData } from '../../../data';

interface Props {
  coursework: Course[];
  university: string;
}

interface State {
  semester: string;
  ta: boolean;
}

export class CourseList extends React.PureComponent<Props, State> {
  state: Readonly<State> = {
    semester: '',
    ta: false,
  };

  toggleTA = () => this.setState(({ ta }) => ({ ta: !ta }));

  setSemester = (event: React.FormEvent<HTMLSelectElement>) =>
    this.setState({ semester: (event.target as HTMLSelectElement).value });

  render() {
    const { semester, ta } = this.state;
    const { children, coursework, university } = this.props;

    const semesters = coursework
      .map((course) => course.semester)
      .filter((v, i, a) => a.indexOf(v) === i);
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

    return (
      <div>
        <div className="columns is-mobile is-variable is-1 is-vcentered">
          <div className="column is-narrow">{children}</div>
          <div className="column">
            <p>
              &nbsp;
              {uni.scale}: <strong className="has-text-white">{grade.toFixed(2)}</strong>
            </p>
          </div>
          <div className="column is-narrow">
            <button
              className={classNames('button is-small', ta ? 'is-success' : 'is-outlined is-light')}
              onClick={this.toggleTA}>
              TA
            </button>
          </div>
          <div className="column is-narrow">
            <div className="select is-small is-dark">
              <select onChange={this.setSemester}>
                <option value="">All Terms</option>
                {semesters.map((semester) => (
                  <option value={semester}>{semester}</option>
                ))}
              </select>
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
