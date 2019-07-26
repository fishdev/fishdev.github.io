import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

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
    console.log(block);
    return (
      <div>
        <section className="hero is-light">
          <div className="hero-head">
            <Navbar showButtons={false} />
          </div>
          <div className="hero-body">
            <ResponsiveContainer size="medium">Hello</ResponsiveContainer>
          </div>
        </section>
      </div>
    );
  }
}
