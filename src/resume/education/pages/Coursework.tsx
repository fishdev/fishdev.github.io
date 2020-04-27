import React from 'react';

import { ScrollToTop, MetaTags, Navbar, ResponsiveContainer, Footer } from '../../../base';
import { universities } from '../../../assets/data';
import { CourseList } from '../components';

export const Coursework: React.FC = () => (
  <div>
    <ScrollToTop />
    <MetaTags name="Coursework" description={"The classes I've taken at " + universities[0].name} />
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
              <span>At {universities[0].name}</span>
            </h5>
          </div>
          <br />
          <br />
          <CourseList coursework={universities[0].coursework} />
        </ResponsiveContainer>
      </div>
      <div className="hero-foot">
        <Footer />
      </div>
    </div>
  </div>
);
