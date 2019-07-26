import React from 'react';
import { RouteComponentProps, withRouter, Link } from 'react-router-dom';

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
    return (
      <div>
        <section className="hero is-light">
          <div className="hero-head">
            <Navbar showButtons={false} />
          </div>
          <div className="hero-body ">
            <ResponsiveContainer centered={true} size="medium">
              <h3 className="title">under construction</h3>
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
    );
  }
}
