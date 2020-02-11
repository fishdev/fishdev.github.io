import React from 'react';

import { MetaTags } from '../components/MetaTags';
import { ROLE, ORGANIZATION, more } from '../assets/data';
import { Profile } from '../components/Profile';
import { About } from './About';
import { SocialButtons } from '../components/SocialButtons';
import { Footer } from '../components/Footer';
import { Resume } from './Resume';

export const Home: React.FC = () => (
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
