import React from 'react';
import PropTypes from 'prop-types';

class IconButton extends React.Component {
  static propTypes = {
    url: PropTypes.string.isRequired,
    name: PropTypes.string,
    icon: PropTypes.string,
  };

  render() {
    const { url, name, icon } = this.props;
    return (
      <a href={url} title={name}>
        <span class="icon is-small">
          <i class={icon + 'fa-lg'} />
        </span>
      </a>
    );
  }
}

export default IconButton;
