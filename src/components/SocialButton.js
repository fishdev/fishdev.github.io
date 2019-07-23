import React from 'react';
import PropTypes from 'prop-types';

class SocialButton extends React.Component {
  static propTypes = {
    color: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  };

  render() {
    const { color, url, icon, name } = this.props;
    return (
      <p class="control">
        <a class={'button is-rounded is-outlined is-' + color} href={url}>
          <span class="icon is-small">
            <i class={icon} />
          </span>
          <span>{name}</span>
        </a>
      </p>
    );
  }
}

export default SocialButton;
