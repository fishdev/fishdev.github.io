import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { ScrollToTop, ResponsiveContainer, TabLink, Footer, Navbar } from '../../base';
import data from '../../assets/data';
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
                {data.favorites.music && <TabLink to="/favorites/music">Music</TabLink>}
                {data.favorites.podcasts && <TabLink to="/favorites/podcasts">Podcasts</TabLink>}
                {Object.keys(data.favorites.content).map((name) => (
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
            {data.favorites.music && <Route path="/favorites/music" exact component={Playlists} />}
            {data.favorites.podcasts && (
              <Route path="/favorites/podcasts" exact component={Podcasts} />
            )}
            {Object.keys(data.favorites.content).map((name) => (
              <Route key={name} path={'/favorites/' + name} exact component={ContentStack} />
            ))}
            <Route
              path="/favorites"
              exact
              render={() => (
                <Redirect
                  to={
                    '/favorites/' +
                    (data.favorites.music ? 'music' : Object.keys(data.favorites.content)[0])
                  }
                />
              )}
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
