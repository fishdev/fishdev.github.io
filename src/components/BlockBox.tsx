import React from 'react';

import { Block } from '../interfaces';
import { BlockHeader } from './BlockHeader';

export class BlockBox extends React.PureComponent<Block> {
  static defaultProps: Partial<Block> = {
    awards: [],
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
