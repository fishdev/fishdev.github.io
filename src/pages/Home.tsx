import React from 'react';
import { Link } from 'react-router-dom';
import Div100vh from 'react-div-100vh';

import { MetaTags } from '../components/MetaTags';
import { ROLE, ORGANIZATION, more } from '../assets/data';
import { Profile } from '../components/Profile';
import { LevelGroup } from '../components/LevelGroup';
import { DropdownList } from '../components/DropdownList';
import { FooterContent } from '../components/FooterContent';

export const Home: React.FC = () => (
  <div>
    <MetaTags description={ROLE + ' at ' + ORGANIZATION} />
    <Div100vh id="main" className="hero is-black is-fullheight city has-text-centered fancy">
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
        <FooterContent showImageCredit />
      </div>
    </Div100vh>
  </div>
);
