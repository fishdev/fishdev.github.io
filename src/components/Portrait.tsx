import React from 'react';

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
        <img
          className="is-rounded"
          src={process.env.PUBLIC_URL + '/ashwin.jpg'}
          id="profile"
          alt="Me"
        />
      </figure>
    );
  }
}
