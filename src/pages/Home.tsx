import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';

import { Education } from '../components/Education';
import { Profile } from '../components/Profile';
import { blocks } from '../assets/data';
import { Section } from '../components/Section';
import { HorizontalBlock } from '../components/HorizontalBlock';
import { Skills } from '../components/Skills';

export const Home: React.FC = () => (
  <div>
    <Helmet>
      <title>Ashwin Srinivasan</title>
    </Helmet>
    <div className="columns is-gapless">
      <div className="column is-6 fancy has-text-centered">
        <div id="main" className="hero is-black is-bold pgh">
          <div className="hero-body">
            <div className="container">
              <Profile />
            </div>
          </div>
          <div className="hero-foot">
            <div className="container">
              <div className="columns is-mobile">
                <div className="column">
                  <p className="has-text-grey-light">
                    <small>
                      &copy; Copyright 2019 | Made in{' '}
                      <a className="has-text-grey-light" href="https://www.visitpittsburgh.com">
                        <strong>Pittsburgh, PA</strong>
                      </a>
                    </small>
                  </p>
                </div>
                <div className="column is-narrow">
                  <Link
                    to="/spotify"
                    className="has-text-grey-light tooltip is-tooltip-top"
                    data-tooltip="My Spotify playlists">
                    <span className="icon">
                      <i className="fas fa-music" />
                    </span>
                  </Link>
                  <span
                    className="has-text-grey-light tooltip is-tooltip-top"
                    data-tooltip="Public domain image via Wikimedia Commons">
                    <span className="icon">
                      <i className="fas fa-info" />
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="column is-6">
        <div className="hero is-fullheight scrollable">
          <div id="resume-body" className="hero-body">
            <div className="container">
              <Education />
              {blocks.map(section => (
                <Section key={section.name} name={section.name}>
                  {section.data.map(block => (
                    <HorizontalBlock key={block.id} {...block} />
                  ))}
                </Section>
              ))}
              <Skills />
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
