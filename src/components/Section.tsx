import React from 'react';
import classNames from 'classnames';
import { Element as ScrollElement } from 'react-scroll';
import { StickyContainer, Sticky } from 'react-sticky';

interface Props {
  name: string;
}

export const Section: React.FC<Props> = ({ name, children }) => (
  <ScrollElement name={name} className="block-section is-variable is-4">
    <StickyContainer>
      <div className="columns">
        <div className="column is-narrow fancy section-label">
          <Sticky topOffset={6} bottomOffset={15}>
            {({ style, isSticky }) => (
              <div className={classNames({ 'section-label-sticky': isSticky })} style={style}>
                <strong className="gradientbg">{name.toUpperCase()}</strong>
              </div>
            )}
          </Sticky>
        </div>
        <div className="column">{children}</div>
      </div>
    </StickyContainer>
  </ScrollElement>
);
