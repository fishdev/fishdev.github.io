import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ReactGA from 'react-ga';

import { social } from './assets/data';
import { Home, About, Resume, Details, Spotify, NotFound } from './pages';

const history = createHistory();
history.listen(location => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});

export class App extends React.PureComponent {
  componentDidMount() {
    ReactGA.pageview(window.location.pathname);
  }

  render() {
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
          <Route path="/about" exact component={About} />
          <Route path="/resume" exact component={Resume} />
          <Route path="/spotify" exact component={Spotify} />
          <Route path="/404" component={NotFound} />
          {links}
          <Route path="/:id" component={Details} />
        </Switch>
      </Router>
    );
  }
}
