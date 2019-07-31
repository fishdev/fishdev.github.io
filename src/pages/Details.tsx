import React from 'react';
import { RouteComponentProps, withRouter, Link, Redirect } from 'react-router-dom';

import { getEntity } from '../util';
import { Block } from '../interfaces';
import { Navbar } from '../components/Navbar';
import { ResponsiveContainer } from '../components/ResponsiveContainer';
import { DetailsBars } from '../components/DetailsBars';

interface UrlProps {
  id: string;
}

@(withRouter as any)
export class Details extends React.PureComponent<RouteComponentProps<UrlProps>> {
  render() {
    const { match } = this.props;
    const entity = getEntity(match.params.id);
    if (!entity || !['projects', 'experience', 'activities'].includes(entity.type))
      return <Redirect to="/resume" />;
    const { name, tagline, extra, description, info } = entity.data as Block;
    return (
      <div>
        <section className="hero is-black is-small">
          <div className="hero-head">
            <Navbar />
          </div>
          <div className="hero-body">
            <ResponsiveContainer centered={true} size="medium">
              <h3 className="title">{name}</h3>
              {tagline && <h5 className="subtitle">{tagline}</h5>}
              {extra && <h5 className="subtitle">{extra}</h5>}
            </ResponsiveContainer>
          </div>
        </section>
        <section className="section">
          <ResponsiveContainer size="large">
            <DetailsBars {...entity} />
            <br className="is-hidden-mobile" />
            <div className="content">{info || description}</div>
          </ResponsiveContainer>
        </section>
      </div>
    );
  }
}
