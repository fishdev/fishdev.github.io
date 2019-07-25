import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';

import { Profile } from '../components/Profile';
import { LevelGroup } from '../components/LevelGroup';
import { more } from '../assets/data';
import { DropdownList } from '../components/DropdownList';

export const Home: React.FC = () => (
  <div>
    <Helmet>
      <title>Ashwin Srinivasan</title>
    </Helmet>
    <div id="main" className="hero is-black is-fullheight pgh has-text-centered fancy">
      <div className="hero-body">
        <div className="container">
          <Profile>
            <LevelGroup>
              <Link to="/resume" className="button is-link">
                <span>View my resume</span>
                <span className="icon">
                  <i className="fas fa-arrow-right" />
                </span>
              </Link>
              <DropdownList items={more}>
                <button className="button is-black" aria-haspopup="true">
                  <span className="icon">
                    <i className="fas fa-ellipsis-h" />
                  </span>
                </button>
              </DropdownList>
            </LevelGroup>
          </Profile>
        </div>
      </div>
      <div className="hero-foot">
        <div className="container">
          <p>
            <small className="has-text-grey-light">
              &copy; Copyright 2019 | Made in{' '}
              <a
                className="has-text-grey-light tooltip"
                href="https://www.visitpittsburgh.com"
                data-tooltip="Public domain image via Wikimedia Commons">
                <strong>Pittsburgh, PA</strong>
              </a>
            </small>
          </p>
        </div>
      </div>
    </div>
  </div>
);
