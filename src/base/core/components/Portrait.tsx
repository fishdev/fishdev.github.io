import React from 'react';

import data from '../../../assets/data';

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
        <img className="portrait is-rounded" src={data.constants.portraitUrl} alt="Me" />
      </figure>
    );
  }
}
