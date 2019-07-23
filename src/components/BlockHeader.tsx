import React from 'react';
import classNames from 'classnames';

import { Block } from '../interfaces';
import { IconButton } from './IconButton';

export class BlockHeader extends React.PureComponent<Block> {
  static defaultProps = {
    buttons: [],
    hasMore: false,
  };

  render() {
    const { name, extra, start, end, event, github, url, buttons } = this.props;
    return (
      <div>
        <div className="multihead columns is-mobile is-vcentered is-marginless">
          <div className="column is-paddingless">
            <h5 className="title is-5">{name}</h5>
          </div>
          <div className="column is-narrow">
            {buttons && buttons.map(button => <IconButton {...button} />)}
            {github && <IconButton name="GitHub" icon="github" url={github} />}
            {url && <IconButton name="Website" icon="arrow-right" url={url} />}
          </div>
        </div>
        {extra && <h6 className="subtitle is-6">{extra}</h6>}
        <h6 className={classNames('subtitle is-6', { extrasub: extra })}>
          {start}
          {end && ' — ' + end}
          {event && (
            <span>
              {' '}
              | <a href={event.url}>{event.name}</a>
            </span>
          )}
        </h6>
      </div>
    );
  }
}

export default BlockHeader;
