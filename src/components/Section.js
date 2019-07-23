import React from 'react';
import PropTypes from 'prop-types';

class Section extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };

  render() {
    const { name, children } = this.props;
    return (
      <div class="columns is-marginless" id={name.toLowerCase()}>
        <div class="column is-2 fancier">{name}</div>
        <div class="column">
          <div class="content">{children}</div>
        </div>
      </div>
    );
  }
}

export default Section;
