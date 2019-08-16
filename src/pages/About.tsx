import React from 'react';
import Helmet from 'react-helmet';

import { Navbar } from '../components/Navbar';
import { ResponsiveContainer } from '../components/ResponsiveContainer';
import { Profile } from '../components/Profile';

export const About: React.FC = () => (
  <div>
    <Helmet>
      <title>About | Ashwin Srinivasan</title>
    </Helmet>
    <section className="hero is-black">
      <div className="hero-head">
        <Navbar showName={false} />
      </div>
      <div className="hero-body fancy">
        <ResponsiveContainer centered={true} size="medium">
          <Profile showColorbar={true} showButtons={false} />
        </ResponsiveContainer>
      </div>
    </section>
  </div>
);
