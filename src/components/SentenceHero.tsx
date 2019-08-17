import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import classNames from 'classnames';

import { ResponsiveContainer } from './ResponsiveContainer';

interface Props {
  icon: string;
  size?: number;
  extra?: React.ReactNode;
}

export class SentenceHero extends React.PureComponent<Props> {
  static defaultProps: Partial<Props> = {
    size: 3,
  };

  render() {
    const { icon, size, extra, children } = this.props;
    return (
      <section className="hero is-black sentence-hero">
        <div className="hero-body fancy has-text-centered">
          <ScrollAnimation animateIn="bounceIn">
            <ResponsiveContainer centered size="large">
              <span className="icon">
                <i className={classNames(icon, 'fa-2x')} />
              </span>
              <br />
              <br />
              <p className={'is-size-' + size}>{children}</p>
              {extra && (
                <React.Fragment>
                  <br />
                  <p className="has-text-grey-lighter is-size-5">{extra}</p>
                </React.Fragment>
              )}
            </ResponsiveContainer>
          </ScrollAnimation>
        </div>
      </section>
    );
  }
}
