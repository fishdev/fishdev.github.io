import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { scroller } from 'react-scroll';

import { MetaTags } from '../components';
import { Footer } from '../../footer';
import { SocialButtons } from '../../button';
import { getData } from '../../../data';
import { Profile, About } from '../../../profile';
import { Resume } from '../../../resume';
import { scrollProps } from '../util';

@(withRouter as any)
export class Home extends React.PureComponent<RouteComponentProps> {
  componentDidMount() {
    if (this.props.match.path === '/resume') scroller.scrollTo('resume', scrollProps);
  }

  render() {
    return (
      <div className="blackened">
        <MetaTags
          description={getData().constants.role + ' at ' + getData().constants.organization}
        />
        <div id="main" className="hero is-black is-medium city fade-bottom has-text-centered fancy">
          <div className="hero-body">
            <div className="container">
              <Profile></Profile>
            </div>
          </div>
          <div className="hero-foot">
            <SocialButtons size="large" />
          </div>
        </div>
        <About />
        <Resume />
        <br />
        <br />
        <br />
        <Footer />
      </div>
    );
  }
}
