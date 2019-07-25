import React from 'react';
import { Link } from 'react-router-dom';

import { Block } from '../interfaces';
import { BlockHeader } from './BlockHeader';

export const HorizontalBlock: React.FC<Block> = block => (
  <Link to={'/' + block.id} className="block box">
    <BlockHeader {...block} />
    <div className="content">{block.description}</div>
    {block.awards &&
      block.awards.map((award, i) => (
        <p className="award" key={i}>
          <span className="icon has-text-warning">
            <i className="fas fa-award" />
          </span>
          <span>{award}</span>
        </p>
      ))}
  </Link>
);
