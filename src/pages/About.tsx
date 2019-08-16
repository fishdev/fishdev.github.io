import React from 'react';
import Helmet from 'react-helmet';
import 'animate.css/animate.min.css';
import ScrollAnimation from 'react-animate-on-scroll';

import { Navbar } from '../components/Navbar';
import { ResponsiveContainer } from '../components/ResponsiveContainer';
import { Profile } from '../components/Profile';
import { ImageHero } from '../components/ImageHero';
import cmu from '../assets/cmu.jpeg';
import { SentenceHero } from '../components/SentenceHero';
import skyline from '../assets/skyline.jpeg';
import { Footer } from '../components/Footer';

export const About: React.FC = () => (
  <div style={{ backgroundColor: 'black' }}>
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
    <ScrollAnimation animateIn="fadeInUp" animateOnce>
      <ImageHero url={cmu} />
    </ScrollAnimation>
    <ScrollAnimation animateIn="bounceIn">
      <SentenceHero icon="fas fa-code">
        I'm a <strong className="gradientbg">full-stack developer</strong> with interests in
        operating systems and computer vision.
      </SentenceHero>
    </ScrollAnimation>
    <ScrollAnimation animateIn="fadeInUp" animateOnce>
      <ImageHero url={skyline} />
    </ScrollAnimation>
    <ScrollAnimation animateIn="bounceIn">
      <SentenceHero icon="fas fa-map-marker-alt">
        Born and raised in <strong className="gradientbg">Pittsburgh, Pennsylvania</strong>.
      </SentenceHero>
    </ScrollAnimation>
    <Footer />
  </div>
);
