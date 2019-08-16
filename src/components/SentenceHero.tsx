import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import classNames from 'classnames';

import { ResponsiveContainer } from './ResponsiveContainer';

interface Props {
  icon: string;
}

export const SentenceHero: React.FC<Props> = ({ icon, children }) => (
  <section className="hero is-black sentence-hero">
    <div className="hero-body fancy has-text-centered">
      <ScrollAnimation animateIn="bounceIn">
        <ResponsiveContainer centered size="large">
          <span className="icon">
            <i className={classNames(icon, 'fa-2x')} />
          </span>
          <br />
          <br />
          <p className="is-size-3">{children}</p>
        </ResponsiveContainer>
      </ScrollAnimation>
    </div>
  </section>
);
