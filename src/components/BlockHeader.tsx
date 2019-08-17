import React from 'react';

import { Block } from '../interfaces';
import { Range } from './Range';

interface Props extends Block {
  hasMore?: boolean;
}

export class BlockHeader extends React.PureComponent<Props> {
  static defaultProps: Partial<Props> = {
    buttons: [],
    hasMore: false,
  };

  render() {
    const { name, tagline, extra, range, event, hasMore, url } = this.props;
    const title = (
      <span>
        {name}
        {tagline && ': ' + tagline}
      </span>
    );
    return (
      <div>
        <div className="columns is-mobile is-variable is-1">
          <div className="column">
            <h5 className="title is-5">{title}</h5>
            {extra && <h6 className="subtitle is-6">{extra}</h6>}
            {range && (
              <h6 className="subtitle is-6">
                <Range {...range} />
                {event && (
                  <span>
                    {' '}
                    | <a href={event.url}>{event.name}</a>
                  </span>
                )}
              </h6>
            )}
          </div>
          {hasMore && (
            <div className="column is-narrow">
              <a>
                <span className="icon is-small">
                  <i className="fas fa-lg fa-arrow-right" />
                </span>
              </a>
            </div>
          )}
          {!hasMore && url && (
            <a href={url} className="column is-narrow">
              <span className="icon is-small">
                <i className="fas fa-lg fa-info-circle" />
              </span>
            </a>
          )}
        </div>
      </div>
    );
  }
}
