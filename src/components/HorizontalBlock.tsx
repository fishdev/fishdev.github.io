import React from 'react';
import { Link } from 'react-router-dom';

import { Block } from '../interfaces';
import { BlockHeader } from './BlockHeader';

export const HorizontalBlock: React.FC<Block> = props => (
  <Link to={'/' + props.id} className="block box">
    <BlockHeader {...props} />
    <div className="content">{props.description}</div>
  </Link>
);
