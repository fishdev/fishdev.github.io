import React from 'react';

import { Banner } from '../interfaces';

export class HorizontalBanner extends React.PureComponent<Banner> {
  static defaultProps: Partial<Banner> = {
    flipped: false,
  };

  render() {
    const { title, subtitle, content, image, flipped } = this.props;

    const detailColumn = (
      <div className="column">
        <h4 className="title is-4">{title}</h4>
        {subtitle && <h5 className="subtitle">{subtitle}</h5>}
        <div className="content">{content}</div>
      </div>
    );

    const imageColumn = (
      <div className="column is-4">
        <figure className="image">
          <img className="image-fullheight rounded" src={image.original} alt={image.description} />
        </figure>
      </div>
    );

    return (
      <div className="columns is-vcentered is-variable is-6">
        {flipped ? (
          <React.Fragment>
            {detailColumn}
            {imageColumn}
          </React.Fragment>
        ) : (
          <React.Fragment>
            {imageColumn}
            {detailColumn}
          </React.Fragment>
        )}
      </div>
    );
  }
}
