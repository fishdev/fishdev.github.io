import React from 'react';

interface Props {
  name: string;
}

export const Section: React.FC<Props> = ({ name, children }) => (
  <div className="columns block-section">
    <div className="column is-2 fancy section-label">
      <strong className="gradientbg">{name.toUpperCase()}</strong>
    </div>
    <div className="column">{children}</div>
  </div>
);
