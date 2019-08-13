import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { social } from './assets/data';
import { Home, Resume, Details, Spotify, NotFound } from './pages';

export const App: React.FunctionComponent = () => {
  const links = social.map(item => {
    const name = '/' + item.name!.toLowerCase();
    const redirect: React.FC = () => {
      window.location.href = item.url;
      return null;
    };
    return <Route key={name.slice(1)} path={[name, name.slice(0, 2)]} component={redirect} />;
  });
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/resume" exact component={Resume} />
        <Route path="/spotify" exact component={Spotify} />
        <Route path="/404" component={NotFound} />
        {links}
        <Route path="/:id" component={Details} />
      </Switch>
    </Router>
  );
};
