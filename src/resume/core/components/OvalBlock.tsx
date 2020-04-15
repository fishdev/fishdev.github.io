import React from 'react';
import { Link } from 'react-router-dom';

import { Block } from '../interfaces';

export const OvalBlock: React.FC<Block> = ({ id, name, extra }) => (
  <Link to={'/' + id} className="box oval has-text-centered">
    <h5 className="title is-4">{name}</h5>
    {extra && <h6 className="subtitle is-6 has-text-grey">{extra}</h6>}
  </Link>
);
