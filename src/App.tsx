import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home, Resume, Details, Spotify, NotFound } from './pages';

export const App: React.FunctionComponent = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/resume" exact component={Resume} />
        <Route path="/spotify" exact component={Spotify} />
        <Route path="/404" component={NotFound} />
        <Route path="/:id" component={Details} />
      </Switch>
    </Router>
  );
};
