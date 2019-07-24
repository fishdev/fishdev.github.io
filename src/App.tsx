import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import { Home, Spotify } from './pages';

export const App: React.FunctionComponent = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/spotify" exact component={Spotify} />
    </Router>
  );
};
