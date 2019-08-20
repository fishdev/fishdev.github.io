import React from 'react';
import classNames from 'classnames';
import Img from 'react-image';

import { Banner } from '../interfaces';
import { LoadingBox } from './LoadingBox';

export class HorizontalBanner extends React.PureComponent<Banner> {
  static defaultProps: Partial<Banner> = {
    flipped: false,
  };

  render() {
    const { title, subtitle, content, image, flipped } = this.props;

    const DetailColumn: React.FC = () => (
      <div className="column">
        <h4 className="title is-4">{title}</h4>
        {subtitle && <h5 className="subtitle">{subtitle}</h5>}
        <div className="content">{content}</div>
      </div>
    );

    const ImageColumn: React.FC<{ visibility?: string }> = ({ visibility }) =>
      image ? (
        <div className={classNames('column is-4 is-4-mobile', visibility)}>
          <figure className="image">
            <Img
              className="image-fullheight rounded"
              src={image.original}
              alt={image.description}
              loader={<LoadingBox />}
            />
          </figure>
        </div>
      ) : null;

    return (
      <div className="columns is-vcentered is-variable is-6">
        <ImageColumn visibility={flipped ? 'is-hidden-tablet' : undefined} />
        <DetailColumn />
        {flipped && <ImageColumn visibility="is-hidden-mobile" />}
      </div>
    );
  }
}
