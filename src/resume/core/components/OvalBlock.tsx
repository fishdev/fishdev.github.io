import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import { Block } from '../interfaces';

export const OvalBlock: React.FC<Block> = ({ id, name, extra }) => {
  const dir = Math.ceil(Math.random() * 2);
  const bgGrey = Math.ceil(Math.random() * 3);
  const bgColor = Math.ceil(Math.random() * 4);

  return (
    <Link to={'/' + id} className="box oval has-text-centered">
      <div className="oval-body">
        <h5 className="title is-4">{name}</h5>
        {extra && <h6 className="subtitle is-6 has-text-grey">{extra}</h6>}
      </div>
      <div className={classNames('oval-bg', 'oval-bg-' + bgGrey, 'oval-bg-rotate-' + dir)}></div>
      <div className={classNames('oval-bg', 'oval-bg-' + bgColor, 'oval-bg-skew-' + dir)}></div>
    </Link>
  );
};
