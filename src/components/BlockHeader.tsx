import React from 'react';

import { Block } from '../interfaces';
import { Range } from './Range';
import { Link } from 'react-router-dom';

interface Props extends Block {
  hasMore?: boolean;
}

export class BlockHeader extends React.PureComponent<Props> {
  static defaultProps: Partial<Props> = {
    buttons: [],
    hasMore: false,
  };

  render() {
    const { id, name, extra, range } = this.props;
    return (
      <div className="block-header">
        <p className="is-size-3">
          <Link to={'/' + id}>{name}</Link>
        </p>
        {extra && (
          <span className="is-size-5 has-text-grey">
            {extra}
            {range && (
              <React.Fragment>
                <br />
                <Range {...range} />
              </React.Fragment>
            )}
          </span>
        )}
      </div>
    );
  }
}
