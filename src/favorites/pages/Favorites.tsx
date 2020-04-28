import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { ScrollToTop, ResponsiveContainer, TabLink, Footer, Navbar } from '../../base';
import { getData } from '../../data';
import { Playlists, Podcasts, ContentStack } from '../components';
import { capitalize } from '../../resume';

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
                {getData().favorites.music && <TabLink to="/favorites/music">Music</TabLink>}
                {getData().favorites.podcasts && (
                  <TabLink to="/favorites/podcasts">Podcasts</TabLink>
                )}
                {Object.keys(getData().favorites.content).map((name) => (
                  <TabLink key={name} to={'/favorites/' + name}>
                    {capitalize(name)}
                  </TabLink>
                ))}
              </ul>
            </div>
          </nav>
          <br />
          <br />
          <Switch>
            {getData().favorites.music && (
              <Route path="/favorites/music" exact component={Playlists} />
            )}
            {getData().favorites.podcasts && (
              <Route path="/favorites/podcasts" exact component={Podcasts} />
            )}
            <Route path="/favorites/:name" exact component={ContentStack} />
            <Route
              path="/favorites"
              exact
              render={() => (
                <Redirect
                  to={
                    '/favorites/' +
                    (getData().favorites.music
                      ? 'music'
                      : Object.keys(getData().favorites.content)[0])
                  }
                />
              )}
            />
          </Switch>
        </ResponsiveContainer>
      </div>
      <div className="hero-foot">
        <Footer />
      </div>
    </section>
  </div>
);
