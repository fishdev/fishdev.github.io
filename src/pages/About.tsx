import React from 'react';

import { Navbar } from '../components/Navbar';
import { ResponsiveContainer } from '../components/ResponsiveContainer';
import { Profile } from '../components/Profile';
import { AboutItem } from '../components/AboutItem';
import { about } from '../assets/data';
import { Footer } from '../components/Footer';
import { MetaTags } from '../components/MetaTags';

export const About: React.FC = () => (
  <div className="has-background-black">
    <MetaTags name="About" description="Read about who I am" />
    <section className="hero is-black is-medium profile-hero">
      <div className="hero-head">
        <Navbar showName={false} />
      </div>
      <div className="hero-body fancy">
        <ResponsiveContainer centered size="medium">
          <Profile showColorbar={true} showButtons={false} />
        </ResponsiveContainer>
      </div>
      <div className="hero-foot has-text-centered">
        <small className="has-text-grey-darker">
          <b>Scroll </b>
          <span className="icon is-small">
            <i className="fas fa-arrow-down" />
          </span>
        </small>
      </div>
    </section>
    {about.map((item, i) => (
      <AboutItem key={i} {...item} />
    ))}
    <Footer />
  </div>
);
