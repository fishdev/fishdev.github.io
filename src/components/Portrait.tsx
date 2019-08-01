import React from 'react';
import ashwin from '../assets/ashwin.jpg';

interface Props {
  size: string;
}

export class Portrait extends React.PureComponent<Props> {
  static defaultProps = {
    size: '128x128',
  };

  render() {
    const { size } = this.props;
    return (
      <figure className={'image is-' + size}>
        <img className="is-rounded" src={ashwin} id="profile" alt="Me" />
      </figure>
    );
  }
}
