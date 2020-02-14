import React from 'react';
import { Element as ScrollElement } from 'react-scroll';

import { university } from '../assets/data';
import { ResponsiveContainer } from './ResponsiveContainer';
import { Link } from 'react-router-dom';

interface Props {
  showSearch(): void;
}

export const Education: React.FC<Props> = ({ showSearch }) => (
  <ScrollElement name="education" className="hero is-black">
    <div className="hero-body fancy">
      <ResponsiveContainer size="huge">
        <div className="columns is-vcentered is-variable is-5 is-mobile is-multiline">
          <div className="column is-12-mobile">
            <p className="is-size-4">{university}</p>
          </div>
          <div className="column is-4-mobile is-narrow has-text-centered">
            <Link to="/courses" className="hoverable">
              <span className="icon is-large ">
                <i className="fas fa-graduation-cap fa-2x" />
              </span>
              <br />
              <span>Courses</span>
            </Link>
          </div>
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
