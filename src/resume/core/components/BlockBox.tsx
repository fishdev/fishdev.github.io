import React from 'react';
import { Route } from 'react-router-dom';
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
    const { id, description, awards, hasMore, isBox } = this.props;
    return (
      <Route
        render={({ history }) => (
          <div
            className={classNames({ box: isBox }, 'block', { 'block-link': hasMore })}
            onClick={() => hasMore && history.push('/' + id)}>
            <BlockHeader {...this.props} />
            {description && <div className="content block-description">{description}</div>}
            {awards!.map((award, i) => (
              <AwardItem key={i}>{award}</AwardItem>
            ))}
          </div>
        )}
      />
    );
  }
}
