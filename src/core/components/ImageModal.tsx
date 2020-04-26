import React from 'react';
import classNames from 'classnames';
import { LazyLoadImage as Img } from 'react-lazy-load-image-component';

import { Image } from '../interfaces';
import { LoadingBox } from '../components';

interface Props {
  active: boolean;
  stamped?: boolean;
  toggleModal(): void;
  prevImage?(): void;
  nextImage?(): void;
  data: Image;
}

export class ImageModal extends React.PureComponent<Props> {
  static defaultProps: Partial<Props> = {
    stamped: false,
  };

  render() {
    const { active, toggleModal, prevImage, nextImage, stamped, data } = this.props;
    return (
      <div className={classNames('modal', { 'is-active': active })}>
        <div className="modal-background" onClick={toggleModal} />
        <div className="modal-content animated faster zoomIn">
          <Img
            className="modal-image"
            src={data.original}
            placeholder={<LoadingBox />}
            onDoubleClick={() => window.open(data.original)}
          />
          {stamped && (
            <React.Fragment>
              <div className="image-stamp stamp-purple"></div>
              <div className="image-stamp stamp-blue"></div>
              <div className="image-stamp-text">AS</div>
            </React.Fragment>
          )}
          {prevImage && (
            <a className="has-text-white is-pulled-left" onClick={prevImage}>
              <span className="icon is-small">
                <i className="fas fa-chevron-left"></i>
              </span>
            </a>
          )}
          {nextImage && (
            <a className="has-text-white is-pulled-right" onClick={nextImage}>
              <span className="icon is-small">
                <i className="fas fa-chevron-right"></i>
              </span>
            </a>
          )}
          {data.description && (
            <p className="has-text-grey has-text-centered">{data.description}</p>
          )}
        </div>
        <button className="modal-close is-large" onClick={toggleModal} />
      </div>
    );
  }
}
