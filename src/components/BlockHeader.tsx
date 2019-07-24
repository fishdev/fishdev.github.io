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
    console.log(this.props);
    return (
      <div>
        <div className="columns is-mobile is-marginless">
          <div className="column is-paddingless">
            <h5 className="title is-5">{name}</h5>
            {extra && <h6 className="subtitle is-6 extrasub">{extra}</h6>}
            <h6 className="subtitle is-6">
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
          <div className="column is-narrow is-paddingless">
            <div className="columns is-mobile is-variable is-2">
              {buttons && buttons.map(button => <IconButton key={button.name} {...button} />)}
              {github && <IconButton name="GitHub" icon="fab fa-github" url={github} />}
              {url && <IconButton name="Website" icon="fas fa-arrow-right" url={url} />}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BlockHeader;
