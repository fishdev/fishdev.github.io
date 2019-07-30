import React from 'react';
import { RouteComponentProps, withRouter, Link, Redirect } from 'react-router-dom';

import { getEntity } from '../util';
import { Block } from '../interfaces';
import { Navbar } from '../components/Navbar';
import { ResponsiveContainer } from '../components/ResponsiveContainer';
import { Range } from '../components/Range';

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
    const { name, tagline, range } = entity.data as Block;
    return (
      <div>
        <section className="hero is-light">
          <div className="hero-head">
            <Navbar showButtons={false} />
          </div>
          <div className="hero-body">
            <ResponsiveContainer centered={true} size="medium">
              <h3 className="title">{name}</h3>
              {tagline && <h5 className="subtitle">{tagline}</h5>}
            </ResponsiveContainer>
          </div>
        </section>
        <section className="section">
          <ResponsiveContainer size="large">
            <div className="columns is-vcentered">
              <div className="column">
                <Link to="/resume" className="button is-small">
                  <span className="icon">
                    <i className="fas fa-arrow-left" />
                  </span>
                  &nbsp;
                  <span>back to resume</span>
                </Link>
              </div>
              {range && (
                <div className="column is-narrow">
                  <Range {...range} />
                </div>
              )}
            </div>
          </ResponsiveContainer>
        </section>
      </div>
    );
  }
}
