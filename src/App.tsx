import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home';

export const App: React.FunctionComponent = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
    </Router>
  );
};
