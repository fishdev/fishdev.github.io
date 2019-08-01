import React from 'react';

import { Block } from '../interfaces';
import { BlockHeader } from './BlockHeader';
import { AwardItem } from './AwardItem';

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
          <AwardItem key={i}>{award}</AwardItem>
        ))}
      </div>
    );
  }
}
