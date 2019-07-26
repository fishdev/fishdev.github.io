import React from 'react';
import { Link } from 'react-router-dom';

import { Block } from '../interfaces';
import { IconButton } from './IconButton';

export class BlockHeader extends React.PureComponent<Block> {
  static defaultProps: Partial<Block> = {
    buttons: [],
    hasMore: false,
  };

  render() {
    const { id, name, tagline, extra, start, end, event, github, url, buttons } = this.props;
    const extraButtons = [];
    if (github) extraButtons.push({ url: github!, icon: 'fab fa-github', name: 'GitHub' });
    if (url) extraButtons.push({ url: url!, icon: 'fas fa-arrow-right', name: 'Website' });
    const allButtons = buttons!.concat(extraButtons);
    return (
      <div>
        <div className="columns is-mobile is-variable is-1">
          <div className="column">
            <h5 className="title is-5">
              <Link to={'/' + id}>
                {name}
                {tagline && ': ' + tagline}
              </Link>
            </h5>
            {extra && <h6 className="subtitle is-6">{extra}</h6>}
            {start && (
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
            )}
          </div>
          <div className="column is-narrow">
            <div className="columns is-mobile is-variable is-2">
              {allButtons.map(button => (
                <div key={button.name} className="column">
                  <IconButton {...button} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
