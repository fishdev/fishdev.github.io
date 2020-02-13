import React from 'react';
import { Element as ScrollElement } from 'react-scroll';

interface Props {
  name: string;
}

export const Section: React.FC<Props> = ({ name, children }) => (
  <ScrollElement name={name} className="columns block-section is-variable is-4">
    <div className="column is-narrow fancy section-label">
      <strong className="gradientbg">{name.toUpperCase()}</strong>
    </div>
    <div className="column">{children}</div>
  </ScrollElement>
);
