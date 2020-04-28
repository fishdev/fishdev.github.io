import React from 'react';
import { RouteComponentProps, withRouter, Redirect } from 'react-router-dom';

import { MetaTags, ResponsiveContainer } from '../../base';
import { HorizontalBanner } from './HorizontalBanner';
import { getData } from '../../data';

interface UrlProps {
  name: string;
}

@(withRouter as any)
export class ContentStack extends React.PureComponent<RouteComponentProps<UrlProps>> {
  render() {
    const { name } = this.props.match.params;

    if (!getData().favorites.content[name]) return <Redirect to="/404" />;
    const banners = getData().favorites.content[name];

    return (
      <div>
        <MetaTags
          name="Favorites - Code"
          description="A collection of awesome languages and libraries"
        />
        <ResponsiveContainer size="large">
          {banners.map((banner, i) => (
            <React.Fragment key={i}>
              <HorizontalBanner {...banner} />
              <br className="is-hidden-mobile" />
              {i < banners.length - 1 && <br />}
            </React.Fragment>
          ))}
        </ResponsiveContainer>
      </div>
    );
  }
}
