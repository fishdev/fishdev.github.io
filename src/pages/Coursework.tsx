import React from 'react';

import { ScrollToTop } from '../components/ScrollToTop';
import { MetaTags } from '../components/MetaTags';
import { Navbar } from '../components/Navbar';
import { ResponsiveContainer } from '../components/ResponsiveContainer';
import { Footer } from '../components/Footer';
import { UNIVERSITY } from '../assets/data';
import { CourseList } from '../components/CourseList';

export const Coursework: React.FC = () => (
  <div>
    <ScrollToTop />
    <MetaTags name="Coursework" description={"The classes I've taken at " + UNIVERSITY} />
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
              <span>At {UNIVERSITY}</span>
            </h5>
          </div>
          <br />
          <br />
          <CourseList />
        </ResponsiveContainer>
      </div>
      <div className="hero-foot">
        <Footer />
      </div>
    </div>
  </div>
);
