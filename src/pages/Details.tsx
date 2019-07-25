import React from 'react';

import { Navbar } from '../components/Navbar';
import { ResponsiveContainer } from '../components/ResponsiveContainer';

export class Details extends React.PureComponent {
  render() {
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
