import React from 'react';
import classNames from 'classnames';

import { blocks } from '../../../assets/data';
import { StickyContainer, Sticky } from 'react-sticky';
import { OvalBlock } from './OvalBlock';

interface State {
  section: number;
}

export class OvalSwitcher extends React.PureComponent<{}, State> {
  state: Readonly<State> = {
    section: 0,
  };

  switchSection = (i: number) => this.setState({ section: i });

  render() {
    const { section } = this.state;
    return (
      <StickyContainer>
        <div className="columns is-variable is-6">
          <div className="column is-narrow section-box-column">
            <Sticky topOffset={-1} bottomOffset={15}>
              {({ isSticky, style }) => (
                <div
                  className={classNames('box gradient-box', { 'section-label-sticky': isSticky })}
                  style={style}>
                  <div className="gradient-box-body has-text-right">
                    {blocks.map(({ name }, i) => (
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
            <div className="columns is-multiline is-vcentered is-variable is-6">
              {blocks[section].data.map((block, i) => (
                <div className="column is-narrow" key={block.id}>
                  <OvalBlock {...block} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </StickyContainer>
    );
  }
}
