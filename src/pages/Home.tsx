import React from 'react';

import { Education } from '../components/Education';
import { Profile } from '../components/Profile';
import { blocks } from '../assets/data';
import { Section } from '../components/Section';
import { HorizontalBlock } from '../components/HorizontalBlock';
import { Skills } from '../components/Skills';

const Home: React.FunctionComponent = () => (
  <div>
    <div className="modal" id="shortcuts">
      <div className="modal-background" />
      <div className="modal-content">
        <div className="box">
          <p>Handy keyboard shortcuts you can use to navigate my website:</p>
          <div className="columns">
            <div className="column">
              <div className="content">
                <ul>
                  <li>
                    <strong>G</strong>itHub
                  </li>
                  <li>
                    <strong>L</strong>inkedIn
                  </li>
                  <li>
                    E<strong>m</strong>ail
                  </li>
                </ul>
              </div>
            </div>
            <div className="column">
              <div className="content">
                <ul>
                  <li>
                    <strong>R</strong>esume
                  </li>
                  <li>
                    <strong>E</strong>ducation
                  </li>
                  <li>
                    <strong>P</strong>rojects
                  </li>
                </ul>
              </div>
            </div>
            <div className="column">
              <div className="content">
                <ul>
                  <li>
                    E<strong>x</strong>perience
                  </li>
                  <li>
                    <strong>A</strong>ctivities
                  </li>
                  <li>
                    <strong>S</strong>kills
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="modal-close is-large" aria-label="close" />
    </div>
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
                  <p
                    className="has-text-grey-light tooltip is-tooltip-top"
                    data-tooltip="Public domain image via Wikimedia Commons">
                    <span className="icon">
                      <i className="fas fa-info-circle" />
                    </span>
                  </p>
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

export default Home;
