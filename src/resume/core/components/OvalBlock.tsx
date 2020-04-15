import React from 'react';
import { Link } from 'react-router-dom';

import { Block } from '../interfaces';

export const OvalBlock: React.FC<Block> = ({ id, name, extra }) => (
  <div className="box oval has-text-centered">
    {/* <BlockHeader hasMore {...block} /> */}
    <h5 className="title is-4">
      <Link to={'/' + id}>{name}</Link>
    </h5>
    {extra && <h6 className="subtitle is-6 has-text-grey">{extra}</h6>}
  </div>
);
