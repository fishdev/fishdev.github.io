import React from 'react';
import { Element as ScrollElement } from 'react-scroll';

import { getData } from '../../../data';
import { ResponsiveContainer } from '../../../base';
import { monthToString, monthIsFuture, arrToSentence } from '../../core';
import { Link } from 'react-router-dom';
import { currentUniversity, otherUniversities } from '../util';

interface Props {
  showSearch(): void;
}

export const Education: React.FC<Props> = ({ showSearch }) => {
  const uni = currentUniversity();
  const otherUnis = otherUniversities();
  return (
    <ScrollElement name="education" className="hero is-black">
      <div className="hero-body fancy">
        <ResponsiveContainer size="huge">
          <div className="columns is-vcentered is-variable is-5 is-mobile is-multiline">
            <div className="column is-12-mobile">
              <p className="is-size-4">
                Studying {uni.majors.join(' and ')} at{' '}
                <a href={uni.url}>
                  <strong>{uni.name}</strong>
                </a>
                {uni.minors.length > 0 && <span> with a minor in {arrToSentence(uni.minors)}</span>}
                . My cumulative {uni.scale} is{' '}
                <strong className="gradientbg">{uni.grade.toFixed(2)}</strong>.
                {monthIsFuture(uni.range.end!) ? ' Expected graduation ' : ' Graduated '}
                in {monthToString(uni.range.end!)}.
                {otherUnis.length > 0 && (
                  <span> Also attended {arrToSentence(otherUnis.map(({ name }) => name))}.</span>
                )}
              </p>
            </div>
            {getData().resume.education.coursework && (
              <div className="column is-4-mobile is-narrow has-text-centered">
                <Link to="/courses" className="hoverable">
                  <span className="icon is-large ">
                    <i className="fas fa-graduation-cap fa-2x" />
                  </span>
                  <br />
                  <span>Courses</span>
                </Link>
              </div>
            )}
            <div className="column is-4-mobile is-narrow has-text-centered">
              <a className="hoverable" onClick={showSearch}>
                <span className="icon is-large ">
                  <i className="fas fa-search fa-2x" />
                </span>
                <br />
                <span>Search</span>
              </a>
            </div>
            <div className="column is-4-mobile is-narrow has-text-centered">
              <a className="hoverable" href={process.env.PUBLIC_URL + '/resume.pdf'}>
                <span className="icon is-large">
                  <i className="fas fa-file-download fa-2x" />
                </span>
                <br />
                <span>Resume</span>
              </a>
            </div>
          </div>
        </ResponsiveContainer>
      </div>
    </ScrollElement>
  );
};
