import React from 'react';
import { Element as ScrollElement } from 'react-scroll';

interface Props {
  name: string;
}

export const Section: React.FC<Props> = ({ name, children }) => (
  <ScrollElement className="block-container columns" name={name}>
    <div className="column is-2 fancier">{name.charAt(0).toUpperCase() + name.slice(1)}</div>
    <div className="column">
      <div className="content">{children}</div>
    </div>
  </ScrollElement>
);
