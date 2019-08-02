import React from 'react';
import classNames from 'classnames';

import { Block } from '../interfaces';
import { BlockHeader } from './BlockHeader';
import { AwardItem } from './AwardItem';

interface Props extends Block {
  hasMore?: boolean;
  isBox?: boolean;
}

export class BlockBox extends React.PureComponent<Props> {
  static defaultProps: Partial<Props> = {
    awards: [],
    hasMore: false,
    isBox: true,
  };

  render() {
    const { description, awards, isBox } = this.props;
    return (
      <div className={classNames({ box: isBox }, 'block')}>
        <BlockHeader {...this.props} />
        {description && <div className="content">{description}</div>}
        {awards!.map((award, i) => (
          <AwardItem key={i}>{award}</AwardItem>
        ))}
      </div>
    );
  }
}
