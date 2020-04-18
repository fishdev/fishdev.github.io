import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { ScrollToTop, ResponsiveContainer, TabLink, Footer, Navbar } from '../../core/';
import { favorites } from '../../assets/data';

export const Favorites: React.FC = () => (
  <div>
    <ScrollToTop />
    <section className="hero is-black">
      <div className="hero-head">
        <Navbar color="black" showMenu={false} />
      </div>
      <div className="hero-body">
        <ResponsiveContainer size="huge">
          <span className="fancy has-text-centered">
            <h3 className="title gradientbg">My favorite stuff</h3>
            <h5 className="subtitle has-text-grey-light">
              <span>Things I really </span>
              <span className="icon animated flash">
                <i className="fas fa-heart" />
              </span>
            </h5>
          </span>
          <br />
          <br />
          <nav className="tabs is-toggle is-toggle-rounded is-centered">
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
          <br />
          <br />
          <Switch>
            {favorites.map((section, i) => (
              <Route
                key={section.name}
                path={'/favorites/' + section.name}
                exact
                component={section.component}
              />
            ))}
            <Route
              path="/favorites"
              exact
              render={() => <Redirect to={'/favorites/' + favorites[0].name} />}
            />
            }
          </Switch>
        </ResponsiveContainer>
      </div>
      <div className="hero-foot">
        <Footer />
      </div>
    </section>
  </div>
);
