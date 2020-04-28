import React from 'react';
import classNames from 'classnames';
import { StickyContainer, Sticky } from 'react-sticky';
import ScrollAnimation from 'react-animate-on-scroll';

import data from '../../../assets/data';
import { OvalBlock } from './OvalBlock';

interface State {
  section: number;
  isAnimating: boolean;
}

export class OvalSwitcher extends React.PureComponent<{}, State> {
  state: Readonly<State> = {
    section: 0,
    isAnimating: false,
  };

  switchSection = (i: number) =>
    this.setState({ isAnimating: true }, () =>
      setTimeout(() => this.setState({ isAnimating: false, section: i }), 500)
    );

  render() {
    const { section, isAnimating } = this.state;
    return (
      <StickyContainer>
        <div className="columns is-variable is-6">
          <div className="column is-narrow section-box-column">
            <Sticky topOffset={-1} bottomOffset={15}>
              {({ isSticky, style }) => (
                <div
                  className={classNames('box gradient-box', {
                    'section-switcher-sticky': isSticky,
                  })}
                  style={style}>
                  <div className="gradient-box-body has-text-right">
                    {data.resume.blocks.map(({ name }, i) => (
                      <h3 className="title is-3 gradientbg" key={name}>
                        <a onClick={() => this.switchSection(i)}>
                          {i === section && <span>&middot; </span>}
                          {name.toUpperCase()}
                        </a>
                      </h3>
                    ))}
                  </div>
                </div>
              )}
            </Sticky>
          </div>
          <div className="column">
            <ScrollAnimation
              className={classNames('oval-container', { zoomOut: isAnimating })}
              animateIn="zoomIn"
              animateOnce
              duration={0.5}>
              <div className="columns is-multiline is-vcentered is-variable is-6">
                {data.resume.blocks[section].data.map((block, i) => (
                  <div className="column is-narrow" key={block.id}>
                    <OvalBlock {...block} />
                  </div>
                ))}
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </StickyContainer>
    );
  }
}
