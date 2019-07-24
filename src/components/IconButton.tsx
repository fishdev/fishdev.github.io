import React from 'react';
import classNames from 'classnames';

import { Button } from '../interfaces';

export const IconButton: React.FC<Button> = ({ url, name, icon }) => (
  <div className="column">
    <a href={url} className="tooltip is-tooltip-bottom" data-tooltip={name}>
      <span className="icon is-small">
        <i className={classNames('fa-lg', icon)} />
      </span>
    </a>
  </div>
);
