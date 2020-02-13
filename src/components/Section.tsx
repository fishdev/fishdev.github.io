import React from 'react';

interface Props {
  name: string;
}

export const Section: React.FC<Props> = ({ name, children }) => (
  <div className="columns block-section is-variable is-4">
    <div className="column is-narrow fancy section-label">
      <strong className="gradientbg">{name.toUpperCase()}</strong>
    </div>
    <div className="column">{children}</div>
  </div>
);
