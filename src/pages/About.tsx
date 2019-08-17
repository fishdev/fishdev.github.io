import React from 'react';
import Helmet from 'react-helmet';

import { Navbar } from '../components/Navbar';
import { ResponsiveContainer } from '../components/ResponsiveContainer';
import { Profile } from '../components/Profile';
import { ImageHero } from '../components/ImageHero';
import cmu from '../assets/cmu.jpeg';
import { SentenceHero } from '../components/SentenceHero';
import skyline from '../assets/skyline.jpeg';
import path from '../assets/path.jpeg';
import { ParticlesHero } from '../components/ParticlesHero';
import { Footer } from '../components/Footer';

export const About: React.FC = () => (
  <div className="has-background-black">
    <Helmet>
      <title>About | Ashwin Srinivasan</title>
    </Helmet>

    <section className="hero is-black is-medium">
      <div className="hero-head">
        <Navbar showName={false} />
      </div>
      <div className="hero-body fancy">
        <ResponsiveContainer centered size="medium">
          <Profile showColorbar={true} showButtons={false} />
        </ResponsiveContainer>
      </div>
    </section>
    <ImageHero url={cmu} />
    <SentenceHero icon="fas fa-code">
      I'm a <strong className="gradientbg">full-stack developer</strong> with interests in operating
      systems and computer vision.
    </SentenceHero>
    <ImageHero url={skyline} />
    <SentenceHero icon="fas fa-map-marker-alt">
      Born and raised in <strong className="gradientbg">Pittsburgh, Pennsylvania</strong>.
    </SentenceHero>
    <ImageHero url={path} />
    <SentenceHero icon="fas fa-spa">
      <strong className="gradientbg">Juggling</strong> and{' '}
      <strong className="gradientbg">biking</strong> in my free time.
    </SentenceHero>
    <ParticlesHero />
    <Footer />
  </div>
);
