import React from 'react';

import { Block } from '../interfaces';
import { BlockHeader } from './BlockHeader';

export const HorizontalBlock: React.FC<Block> = props => (
  <div className="block box">
    <BlockHeader {...props} />
    <div className="content">{props.description}</div>
  </div>
);
