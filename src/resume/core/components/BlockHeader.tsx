import React from 'react';
import { Link } from 'react-router-dom';

import { Block, Range } from '..';

interface Props extends Block {
  hasMore?: boolean;
}

export class BlockHeader extends React.PureComponent<Props> {
  static defaultProps: Partial<Props> = {
    buttons: [],
    hasMore: false,
  };

  render() {
    const { id, name, extra, range, hasMore } = this.props;
    return (
      <div>
        <p className="is-size-3">{hasMore ? <Link to={'/' + id}>{name}</Link> : name}</p>
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
