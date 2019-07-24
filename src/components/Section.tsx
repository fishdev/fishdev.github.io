import React from 'react';

interface Props {
  name: string;
}

export const Section: React.FC<Props> = ({ name, children }) => (
  <div className="block-container columns is-marginless" id={name.toLowerCase()}>
    <div className="column is-2 fancier">{name}</div>
    <div className="column">
      <div className="content">{children}</div>
    </div>
  </div>
);
