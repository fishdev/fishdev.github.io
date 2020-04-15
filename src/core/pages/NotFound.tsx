import React from 'react';
import { Link } from 'react-router-dom';

import { MetaTags, Navbar, ResponsiveContainer, Footer } from '../components';
import { Search } from '../../resume';

export const NotFound: React.FC = () => (
  <div>
    <MetaTags name="Not Found" description="This page doesn't exist" />
    <section className="hero is-black is-fullheight">
      <div className="hero-head">
        <Navbar color="black" showMenu={false} />
      </div>
      <div className="hero-body">
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
    </section>
  </div>
);
