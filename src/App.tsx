import React from 'react';
import { BrowserRouter as Router, Route, Switch, RouteComponentProps } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';
import { GlobalHotKeys } from 'react-hotkeys';
import 'animate.css/animate.min.css';

import { getData, loadData } from './data';
import { SitemapModal, LoadingBox } from './base';
import { Home, Details, Favorites, NotFound, Gallery, Printable } from './pages';

const history = createBrowserHistory();
history.listen((location) => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});

interface State {
  sitemapActive: boolean;
  isLoading: boolean;
}

export class App extends React.PureComponent<{}, State> {
  state: Readonly<State> = {
    sitemapActive: false,
    isLoading: true,
  };

  showSitemap = () => this.setState({ sitemapActive: true });
  hideSitemap = () => this.setState({ sitemapActive: false });

  async componentDidMount() {
    ReactGA.pageview(window.location.pathname);

    await loadData();
    this.setState({ isLoading: false });

    console.log(
      "%cHi there! If you're curious about my website, check out the source at\n" +
        getData().constants.websiteSrc +
        ' :)',
      'font-family: monospace; font-size: 24px'
    );
  }

  render() {
    const { isLoading } = this.state;
    if (isLoading)
      return (
        <div className="hero is-black is-large">
          <div className="hero-body">
            <div className="columns is-mobile is-centered">
              <div className="column is-narrow">
                <LoadingBox />
              </div>
            </div>
          </div>
        </div>
      );

    const links = getData().links.social.map((item) => {
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
            <Route path="/after-hours" exact component={Home} />
            <Route path="/resume" exact component={Home} />
            <Route path="/resume/printable" exact component={Printable} />
            <Route path="/gallery" exact component={Gallery} />
            <Route path="/gallery/:tag" exact component={Gallery} />
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
