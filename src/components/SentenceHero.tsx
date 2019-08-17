import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import classNames from 'classnames';

import { Sentence } from '../interfaces';
import { ResponsiveContainer } from './ResponsiveContainer';

export class SentenceHero extends React.PureComponent<Sentence> {
  static defaultProps: Partial<Sentence> = {
    size: 3,
  };

  render() {
    const { icon, size, extra, content } = this.props;
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
              <p className={'is-size-' + size}>{content}</p>
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
