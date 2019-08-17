import React from 'react';
import Helmet from 'react-helmet';
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
            <h5 className="subtitle has-text-grey-light">
              <span>For your enjoyment</span>
              &nbsp;
              <span className="icon gradientbg">
                <i className="fas fa-heart" />
              </span>
            </h5>
          </span>
        </ResponsiveContainer>
      </div>
      <div className="hero-foot">
        <nav className="tabs is-boxed is-centered">
          <div className="container">
            <ul>
              {favorites.map((section, i) => (
                <TabLink key={section.name} to={'/favorites' + (i > 0 ? '/' + section.name : '')}>
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
                path={'/favorites' + (i > 0 ? '/' + section.name : '')}
                exact
                component={section.component}
              />
            ))}
            <Route render={() => <Redirect to="/404" />} />}
          </Switch>
        </ScrollAnimation>
      </div>
    </section>
    <Footer />
  </div>
);
