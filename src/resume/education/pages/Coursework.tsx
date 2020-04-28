import React from 'react';

import { ScrollToTop, MetaTags, Navbar, ResponsiveContainer, Footer } from '../../../base';
import data from '../../../assets/data';
import { CourseList } from '../components';
import { arrToSentence } from '../../core';
import { allUniversities } from '../util';

export const Coursework: React.FC = () => {
  const unis = arrToSentence(allUniversities().map(({ name }) => name));

  return (
    <div>
      <ScrollToTop />
      <MetaTags name="Coursework" description={"The classes I've taken at " + unis} />
      <div className="hero is-black">
        <div className="hero-head">
          <Navbar color="black" showMenu={false} />
        </div>
        <div className="hero-body">
          <ResponsiveContainer size="large">
            <div className="fancy">
              <h3 className="title gradientbg">Coursework</h3>
              <h5 className="subtitle has-text-grey-light">
                <span className="icon">
                  <i className="fas fa-school" />
                </span>
                &nbsp;&nbsp;
                <span>At {unis}</span>
              </h5>
            </div>
            <br />
            <br />
            <CourseList coursework={data.resume.education.coursework || []} />
          </ResponsiveContainer>
        </div>
        <div className="hero-foot">
          <Footer />
        </div>
      </div>
    </div>
  );
};
