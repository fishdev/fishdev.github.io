import React from 'react';

import { Button } from '../interfaces';

export const IconButton: React.FC<Button> = ({ url, name, icon }) => (
  <a href={url} title={name}>
    <span className="icon is-small">
      <i className={icon + 'fa-lg'} />
    </span>
  </a>
);
