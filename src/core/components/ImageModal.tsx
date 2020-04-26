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
          <div className="level image-level">
            <div className="level-left">
              {prevImage && (
                <div className="level-item">
                  <a className="has-text-white-ter is-pulled-left" onClick={prevImage}>
                    <span className="icon is-small">
                      <i className="fas fa-chevron-left"></i>
                    </span>
                  </a>
                </div>
              )}
              {data.description && (
                <div className="level-item">
                  <p className="has-text-centered">
                    <span className="has-text-grey-light">{data.description}</span>
                  </p>
                </div>
              )}
            </div>
            <div className="level-right">
              {data.tags && (
                <div className="level-item">
                  <div className="tags">
                    {data.tags.map((tag) => (
                      <span key={tag} className="tag is-small is-dark">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {nextImage && (
                <div className="level-item">
                  <a className="has-text-white-ter is-pulled-right" onClick={nextImage}>
                    <span className="icon is-small">
                      <i className="fas fa-chevron-right"></i>
                    </span>
                  </a>
                </div>
              )}
            </div>
          </div>
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
        </div>
        <button className="modal-close is-large" onClick={toggleModal} />
      </div>
    );
  }
}
