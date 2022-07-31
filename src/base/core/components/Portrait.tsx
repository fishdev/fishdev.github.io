import React from 'react';

import { getData } from '../../../data';

import '../styles/portrait.scss';

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
        <img className="portrait is-rounded" src={getData().constants.portraitUrl} alt="Me" />
      </figure>
    );
  }
}
