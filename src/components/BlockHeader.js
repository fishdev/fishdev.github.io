import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import IconButton from './IconButton';

class BlockHeader extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    extra: PropTypes.node,
    start: PropTypes.string.isRequired,
    end: PropTypes.string,
    event: PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
    github: PropTypes.string,
    url: PropTypes.string,
    buttons: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      })
    ),
    hasMore: PropTypes.bool,
  };

  static defaultProps = {
    buttons: [],
    hasMore: false,
  };

  render() {
    const { name, extra, start, end, event, github, url, buttons } = this.props;
    return (
      <div>
        <div class="multihead columns is-mobile is-vcentered is-marginless">
          <div class="column is-paddingless">
            <h5 class="title is-5">{name}</h5>
          </div>
          <div class="column is-narrow">
            {buttons.map(button => (
              <IconButton {...button} />
            ))}
            {github && <IconButton name="GitHub" icon="github" url={github} />}
            {url && <IconButton name="Website" icon="arrow-right" url={url} />}
          </div>
        </div>
        {extra && <h6 class="subtitle is-6">{extra}</h6>}
        <h6 class={classNames('subtitle is-6', { extrasub: extra })}>
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
