import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import { coursework } from '../assets/data';
import { CourseBox } from './CourseBox';

interface State {
  semester: string;
  ta: boolean;
}

export class CourseList extends React.PureComponent<{}, State> {
  state: Readonly<State> = {
    semester: '',
    ta: false,
  };

  toggleTA = () => this.setState(({ ta }) => ({ ta: !ta }));

  setSemester = (event: React.FormEvent<HTMLSelectElement>) =>
    this.setState({ semester: (event.target as HTMLSelectElement).value });

  render() {
    const { semester, ta } = this.state;

    const semesters = coursework
      .map(course => course.semester)
      .filter((v, i, a) => a.indexOf(v) === i);
    const courses = coursework.filter(course => {
      if (semester && course.semester !== semester) return false;
      if (ta && !course.ta) return false;
      return true;
    });

    return (
      <div>
        <div className="columns is-mobile is-variable is-1">
          <div className="column">
            <Link to="/" className="button is-small is-outlined is-light">
              <span className="icon">
                <i className="fas fa-arrow-left" />
              </span>
              &nbsp;
              <span>Back</span>
            </Link>
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
                {semesters.map(semester => (
                  <option value={semester}>{semester}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="columns is-multiline">
          {courses.map(course => (
            <div key={course.id} className="column is-half">
              <CourseBox {...course} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
