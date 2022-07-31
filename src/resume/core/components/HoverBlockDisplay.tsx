import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { Block } from '../interfaces';
import { Range } from './Range';

import '../styles/hover-block.scss';

interface Props extends Block {
  clickExpands?: boolean;
  inverted?: boolean;
}

export const HoverBlockDisplay = ({ id, name, extra, tagline, range, inverted }: Props) => {
  return (
    <div className="resume-block-hoverable">
      <p className="is-size-3">
        <Link to={'/' + id} className="resume-block-name">
          {inverted ? extra : name}
        </Link>
      </p>
      <p className="resume-block-expanded animated faster fadeIn">
        <span className="is-size-5">
          {inverted ? name : extra}
          {tagline}
          {range && (
            <Fragment>
              <br />
              <Range {...range} />
            </Fragment>
          )}
        </span>
      </p>
    </div>
  );
};
