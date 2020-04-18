import React from 'react';
import classNames from 'classnames';
import { LazyLoadImage as Img } from 'react-lazy-load-image-component';

import { Banner } from '../interfaces';
import { LoadingBox } from './LoadingBox';
import ScrollAnimation from 'react-animate-on-scroll';

export class HorizontalBanner extends React.PureComponent<Banner> {
  static defaultProps: Partial<Banner> = {
    flipped: false,
  };

  render() {
    const { title, subtitle, content, image, flipped } = this.props;

    const DetailColumn: React.FC = () => (
      <div className="column">
        <ScrollAnimation className="fancy" animateIn="pulse" animateOnce>
          <h4 className="title is-4 gradientbg">{title}</h4>
          {subtitle && <h5 className="subtitle gradientbg">{subtitle}</h5>}
        </ScrollAnimation>
        <br />
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
              placeholder={<LoadingBox />}
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
