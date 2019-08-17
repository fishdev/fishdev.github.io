import React from 'react';
import Helmet from 'react-helmet';
import { NavLink, Route } from 'react-router-dom';

import { Navbar } from '../components/Navbar';
import { ResponsiveContainer } from '../components/ResponsiveContainer';
import { favorites } from '../assets/data';
import { Spotify } from '../components/Spotify';
import { Footer } from '../components/Footer';

export const Favorites: React.FC = () => (
  <div>
    <Helmet>
      <title>Favorites | Ashwin Srinivasan</title>
    </Helmet>
    <section className="hero is-black">
      <div className="hero-head">
        <Navbar />
      </div>
      <div className="hero-body">
        <ResponsiveContainer centered size="medium">
          <span className="fancy">
            <h3 className="title">My favorite stuff</h3>
            <h5 className="subtitle has-text-grey-light">For your enjoyment</h5>
          </span>
        </ResponsiveContainer>
      </div>
      <div className="hero-foot">
        <nav className="tabs is-boxed is-centered">
          <div className="container">
            <ul>
              {favorites.map(section => (
                <NavLink key={section.name} to="/favorites/spotify" activeClassName="is-active">
                  {section.name}
                </NavLink>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </section>
    <Route path="/favorites/spotify" exact component={Spotify} />
    <Footer />
  </div>
);
