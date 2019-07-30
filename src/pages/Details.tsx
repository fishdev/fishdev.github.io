import React from 'react';
import { RouteComponentProps, withRouter, Link, Redirect } from 'react-router-dom';

import { getEntity } from '../util/entities';
import { Navbar } from '../components/Navbar';
import { ResponsiveContainer } from '../components/ResponsiveContainer';

interface UrlProps {
  id: string;
}

@(withRouter as any)
export class Details extends React.PureComponent<RouteComponentProps<UrlProps>> {
  render() {
    const { match } = this.props;
    const block = getEntity(match.params.id);
    return block ? (
      <div>
        <section className="hero is-light">
          <div className="hero-head">
            <Navbar showButtons={false} />
          </div>
          <div className="hero-body ">
            <ResponsiveContainer centered={true} size="large">
              <h3 className="title">{block.data.name}: </h3>
              <Link to="/resume" className="button">
                <span className="icon">
                  <i className="fas fa-arrow-left" />
                </span>
                &nbsp;
                <span>back to resume</span>
              </Link>
            </ResponsiveContainer>
          </div>
        </section>
      </div>
    ) : <Redirect to="/resume" />;
  }
}
