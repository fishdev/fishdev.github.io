import React from 'react';
import { Link } from 'react-router-dom';

import { ScrollToTop, MetaTags, Navbar, ResponsiveContainer, Footer } from '../../../base';
import { CourseList } from '../components';
import { getData } from '../../../data';

interface State {
  universityIdx: number;
}

export class Coursework extends React.PureComponent<{}, State> {
  state: Readonly<State> = {
    universityIdx: 0,
  };

  nextUni = () => this.setState(({ universityIdx }) => ({ universityIdx: universityIdx + 1 }));
  prevUni = () => this.setState(({ universityIdx }) => ({ universityIdx: universityIdx - 1 }));

  render() {
    const { universityIdx } = this.state;

    const uniId = Object.keys(getData().resume.education.universities)[universityIdx];
    const unis = Object.values(getData().resume.education.universities);
    const numUnis = unis.length;
    const uni = unis[universityIdx];

    return (
      <div>
        <ScrollToTop />
        <MetaTags name="Coursework" description={"The classes I've taken in university"} />
        <div className="hero is-black">
          <div className="hero-head">
            <Navbar color="black" showMenu={false} />
          </div>
          <div className="hero-body">
            <ResponsiveContainer size="large">
              <div className="fancy">
                <h3 className="title gradientbg">Coursework</h3>
                <h5 className="subtitle has-text-grey-light">
                  {universityIdx > 0 && (
                    <a
                      className="tooltip has-tooltip-top"
                      data-tooltip="Previous university"
                      onClick={this.prevUni}>
                      <span className="icon">
                        <i className="fas fa-arrow-up" />
                      </span>
                    </a>
                  )}
                  {universityIdx < numUnis - 1 && (
                    <a
                      className="tooltip has-tooltip-top"
                      data-tooltip="Next university"
                      onClick={this.nextUni}>
                      <span className="icon">
                        <i className="fas fa-arrow-down" />
                      </span>
                    </a>
                  )}
                  {numUnis === 1 && (
                    <span className="icon">
                      <i className="fas fa-school" />
                    </span>
                  )}
                  &nbsp;&nbsp;
                  <span>At {uni.name}</span>
                </h5>
              </div>
              <br />
              <br />
              <CourseList university={uniId} coursework={uni.coursework || []}>
                <Link to="/" className="button is-small is-outlined is-light is-hidden-mobile">
                  <span className="icon">
                    <i className="fas fa-arrow-left" />
                  </span>
                  &nbsp;
                  <span>Back</span>
                </Link>
              </CourseList>
            </ResponsiveContainer>
          </div>
          <div className="hero-foot">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}
