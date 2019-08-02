import React from 'react';
import { Link } from 'react-router-dom';

import { Navbar } from '../components/Navbar';
import { ResponsiveContainer } from '../components/ResponsiveContainer';
import { Search } from '../components/Search';
import { Footer } from '../components/Footer';

export const NotFound: React.FC = () => (
  <div>
    <section className="hero is-fullheight">
      <div className="hero-head">
        <Navbar color="white" showMenu={false} />
      </div>
      <div className="hero-body">
        <ResponsiveContainer size="large">
          <div className="has-text-centered">
            <h3 className="title">Sorry, not found.</h3>
            <h5 className="subtitle">
              <div className="columns is-centered is-vcentered is-mobile">
                <div className="column is-narrow">
                  <Link className="button is-primary is-inverted is-medium" to="/">
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
