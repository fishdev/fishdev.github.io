import React, { useState } from 'react';

import { CourseList } from '.';
import { getData } from '../../../data';

interface Props {
  children?: React.ReactNode;
}

export const Coursework = ({ children }: Props) => {
  const [universityIdx, setUniversity] = useState(0);

  const nextUni = () => setUniversity(universityIdx + 1);
  const prevUni = () => setUniversity(universityIdx - 1);

  const uniId = Object.keys(getData().resume.education.universities)[universityIdx];
  const unis = Object.values(getData().resume.education.universities);
  const numUnis = unis.length;
  const uni = unis[universityIdx];

  return (
    <div className="message is-warning">
      <div className="message-header">
        <p>
          <h4 className="title is-4 has-text-light">My coursework</h4>
          {numUnis > 1 && (
            <h5 className="subtitle is-6 has-text-light has-text-right">
              {universityIdx > 0 && (
                <a
                  className="tooltip has-tooltip-top"
                  data-tooltip="Previous university"
                  onClick={prevUni}>
                  <span className="icon">
                    <i className="fas fa-arrow-up" />
                  </span>
                </a>
              )}
              {universityIdx < numUnis - 1 && (
                <a
                  className="tooltip has-tooltip-top"
                  data-tooltip="Next university"
                  onClick={nextUni}>
                  <span className="icon">
                    <i className="fas fa-arrow-down" />
                  </span>
                </a>
              )}
              <span>at {uni.name} </span>
            </h5>
          )}
        </p>
        {children}
      </div>
      <div className="message-body">
        <CourseList university={uniId} coursework={uni.coursework || []} />
      </div>
    </div>
  );
};
