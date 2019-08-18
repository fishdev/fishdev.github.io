import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';

import { ScrollToTop } from '../components/ScrollToTop';
import { Navbar } from '../components/Navbar';
import { ResponsiveContainer } from '../components/ResponsiveContainer';
import { TabLink } from '../components/TabLink';
import { favorites } from '../assets/data';
import { Footer } from '../components/Footer';

export const Favorites: React.FC = () => (
  <div>
    <ScrollToTop />
    <section className="hero is-black">
      <div className="hero-head">
        <Navbar />
      </div>
      <div className="hero-body">
        <ResponsiveContainer centered size="medium">
          <ScrollAnimation animateIn="fadeIn">
            <span className="fancy">
              <h3 className="title gradientbg">My favorite stuff</h3>
              <h5 className="subtitle has-text-grey-light">
                <span>Things I really </span>
                <span className="icon">
                  <i className="fas fa-heart" />
                </span>
              </h5>
            </span>
          </ScrollAnimation>
        </ResponsiveContainer>
      </div>
      <div className="hero-foot">
        <nav className="tabs is-boxed is-centered">
          <div className="container">
            <ul>
              {favorites.map((section, i) => (
                <TabLink key={section.name} to={'/favorites/' + section.name}>
                  {section.name.charAt(0).toUpperCase() + section.name.slice(1)}
                </TabLink>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <ScrollAnimation animateIn="bounceIn">
          <Switch>
            {favorites.map((section, i) => (
              <Route
                key={section.name}
                path={'/favorites/' + section.name}
                exact
                component={section.component}
              />
            ))}
            <Route path="/favorites" exact render={() => <Redirect to="/favorites/playlists" />} />}
          </Switch>
        </ScrollAnimation>
      </div>
    </section>
    <Footer />
  </div>
);
