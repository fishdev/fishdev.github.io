import React from 'react';

import { Block } from '../interfaces';
import { IconButton } from './IconButton';

export class BlockHeader extends React.PureComponent<Block> {
  static defaultProps = {
    buttons: [],
    hasMore: false,
  };

  render() {
    const { name, extra, start, end, event, github, url, buttons } = this.props;
    const extraButtons = [];
    if (github) extraButtons.push({ url: github!, icon: 'fab fa-github', name: 'GitHub' });
    if (url) extraButtons.push({ url: url!, icon: 'fas fa-arrow-right', name: 'Website' });
    const allButtons = buttons!.concat(extraButtons);
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
              {allButtons.map(button => (
                <div className="column">
                  <IconButton key={button.name} {...button} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
