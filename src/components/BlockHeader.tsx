import React from 'react';
import { Link } from 'react-router-dom';

import { Block, Button } from '../interfaces';
import { IconButton } from './IconButton';
import { Range } from './Range';
import { LevelGroup } from './LevelGroup';

export class BlockHeader extends React.PureComponent<Block> {
  static defaultProps: Partial<Block> = {
    buttons: [],
  };

  render() {
    const { id, name, tagline, extra, range, event, github, url, buttons } = this.props;
    const extraButtons: Button[] = [];
    if (github)
      extraButtons.push({
        url: 'https://github.com/' + github,
        icon: 'fab fa-github',
        name: 'GitHub',
      });
    if (url) extraButtons.push({ url, icon: 'fas fa-arrow-right', name: 'Website' });
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
          <div className="column is-narrow">
            <LevelGroup>
              {allButtons.map(button => (
                <IconButton {...button} />
              ))}
            </LevelGroup>
          </div>
        </div>
      </div>
    );
  }
}
