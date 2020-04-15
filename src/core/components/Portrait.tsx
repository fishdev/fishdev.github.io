import React from 'react';

import { PORTRAIT_URL } from '../../assets/data';

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
        <img className="is-rounded" src={PORTRAIT_URL} id="profile" alt="Me" />
      </figure>
    );
  }
}
