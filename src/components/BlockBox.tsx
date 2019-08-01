import React from 'react';

import { Block } from '../interfaces';
import { BlockHeader } from './BlockHeader';

interface Props extends Block {
  hasMore?: boolean;
}

export class BlockBox extends React.PureComponent<Props> {
  static defaultProps: Partial<Props> = {
    awards: [],
    hasMore: false,
  };

  render() {
    const { description, awards } = this.props;
    return (
      <div className="block box">
        <BlockHeader {...this.props} />
        {description && <div className="content">{description}</div>}
        {awards!.map((award, i) => (
          <p className="award" key={i}>
            <span className="icon has-text-warning">
              <i className="fas fa-award" />
            </span>
            <span>{award}</span>
          </p>
        ))}
      </div>
    );
  }
}
