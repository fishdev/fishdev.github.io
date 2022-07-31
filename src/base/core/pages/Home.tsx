import React, { Fragment, useState } from 'react';
import { GlobalHotKeys } from 'react-hotkeys';

import { MetaTags, ModeContainer, Portrait } from '../components';
import { Footer } from '../../footer';
import { getData } from '../../../data';
import { About } from '../../../profile';
import { BusinessCard } from '../../../profile';
import { Resume } from '../../../resume';
import { SearchModal } from '../../../resume/search';

import '../styles/home.scss';

export function Home() {
  const [searchActive, setSearchActive] = useState(false);
  const showSearch = () => setSearchActive(true);
  const hideSearch = () => setSearchActive(false);

  return (
    <Fragment>
      <MetaTags
        description={getData().constants.role + ' at ' + getData().constants.organization}
      />
      <GlobalHotKeys
        keyMap={{ SHOW_SEARCH: '/' }}
        handlers={{
          SHOW_SEARCH: showSearch,
        }}
      />
      {searchActive && <SearchModal hide={hideSearch} />}
      <div className="hero is-gold is-large">
        <div id="main" className="hero-body">
          <div className="container is-max-tablet">
            <div className="block">
              <div className="columns is-vcentered is-mobile">
                <div className="column fancy">
                  <h2 className="subtitle is-2 has-text-gold has-text-weight-bold">Hello, I'm</h2>
                  <h1 className="title is-1 has-text-gold">
                    <span className="gradientbg">{getData().constants.names[0]}</span>.
                  </h1>
                </div>
                <div className="column is-narrow">
                  <Portrait size="96x96" />
                </div>
              </div>
            </div>
            <div className="block is-large">
              <BusinessCard />
            </div>
            <div className="block">
              <About />
            </div>
          </div>
        </div>
      </div>
      <ModeContainer showSearch={showSearch} workChildren={<Resume />} playChildren={'Hello'} />
      <Footer />
    </Fragment>
  );
}
