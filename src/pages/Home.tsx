import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { scroller } from 'react-scroll';

import { MetaTags } from '../components/MetaTags';
import { ROLE, ORGANIZATION } from '../assets/data';
import { Profile } from '../components/Profile';
import { About } from '../components/About';
import { SocialButtons } from '../components/SocialButtons';
import { Footer } from '../components/Footer';
import { Resume } from '../components/Resume';
import { scrollProps } from '../util';

@(withRouter as any)
export class Home extends React.PureComponent<RouteComponentProps<{ section: string }>> {
  componentDidMount() {
    const { section } = this.props.match.params;
    if (section) {
      console.log(section);
      scroller.scrollTo(section.toLowerCase(), scrollProps);
    }
  }

  render() {
    return (
      <div className="blackened">
        <MetaTags description={ROLE + ' at ' + ORGANIZATION} />
        <div id="main" className="hero is-black is-medium city fade-bottom has-text-centered fancy">
          <div className="hero-body hero-body-centered">
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
