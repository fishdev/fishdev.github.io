import React from 'react';
import { Element as ScrollElement } from 'react-scroll';

interface Props {
  name: string;
}

export const Section: React.FC<Props> = ({ name, children }) => (
  <ScrollElement className="block-container columns" name={name.toLowerCase()}>
    <div className="column is-2 fancier">{name}</div>
    <div className="column">
      <div className="content">{children}</div>
    </div>
  </ScrollElement>
);
