import React from 'react';
import { Link } from 'react-router-dom';
import Div100vh from 'react-div-100vh';

import { MetaTags, ResponsiveContainer } from '../components';
import { Navbar } from '../../navigation';
import { Footer } from '../../footer';
import { Search } from '../../../resume';

export const NotFound: React.FC = () => (
  <div>
    <MetaTags name="Not Found" description="This page doesn't exist" />
    <Div100vh className="hero is-black">
      <div className="hero-head">
        <Navbar color="black" showMenu={false} />
      </div>
      <div className="hero-body hero-body-centered">
        <ResponsiveContainer size="medium">
          <div className="has-text-centered">
            <h3 className="title">Sorry, not found.</h3>
            <h5 className="subtitle">
              <div className="columns is-centered is-vcentered is-mobile">
                <div className="column is-narrow">
                  <Link className="button is-primary is-medium" to="/">
                    homepage
                  </Link>
                </div>
                <div className="column is-narrow">
                  <span className="has-text-grey">or search below</span>
                </div>
              </div>
            </h5>
          </div>
          <br />
          <Search />
        </ResponsiveContainer>
      </div>
      <div className="hero-foot">
        <Footer />
      </div>
    </Div100vh>
  </div>
);
