import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import { Home, Resume, Spotify } from './pages';

export const App: React.FunctionComponent = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/resume" exact component={Resume} />
        <Route path="/spotify" exact component={Spotify} />
      </Switch>
    </Router>
  );
};
