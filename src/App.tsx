import React from 'react';
import { BrowserRouter as Router, Route, Switch, RouteComponentProps } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';
import 'animate.css/animate.min.css';
import { GlobalHotKeys } from 'react-hotkeys';

import { social } from './assets/data';
import { SitemapModal } from './components/SitemapModal';
import { Home, About, Resume, Details, Favorites, NotFound } from './pages';

const history = createBrowserHistory();
history.listen(location => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});

interface State {
  sitemapActive: boolean;
}

export class App extends React.PureComponent<{}, State> {
  state: Readonly<State> = {
    sitemapActive: false,
  };

  showSitemap = () => this.setState({ sitemapActive: true });
  hideSitemap = () => this.setState({ sitemapActive: false });

  componentDidMount() {
    ReactGA.pageview(window.location.pathname);
  }

  render() {
    const links = social.map(item => {
      const name = '/' + item.name!.toLowerCase();
      const redirect = ({ match }: RouteComponentProps<{ suffix: string }>): React.ReactNode => {
        let { url } = item;
        const { suffix } = match.params;
        if (suffix) {
          url += suffix;
        }
        window.location.href = url;
        return;
      };
      return (
        <Route
          key={name}
          path={[name + '/:suffix', name.slice(0, 2) + '/:suffix', name, name.slice(0, 2)]}
          render={redirect}
        />
      );
    });

    const { sitemapActive } = this.state;

    return (
      <div>
        <GlobalHotKeys
          keyMap={{ SHOW_SITEMAP: '\\' }}
          handlers={{
            SHOW_SITEMAP: this.showSitemap,
          }}
        />
        <Router>
          {sitemapActive && <SitemapModal hide={this.hideSitemap} />}
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/resume/" exact component={Resume} />
            <Route path="/resume/:section" exact component={Resume} />
            <Route path="/favorites" component={Favorites} />
            <Route path="/404" component={NotFound} />
            {links}
            <Route path="/:id" component={Details} />
          </Switch>
        </Router>
      </div>
    );
  }
}
