import React from 'react';
import classNames from 'classnames';
import { LazyLoadImage as Img } from 'react-lazy-load-image-component';
import Fullscreen from 'react-full-screen';

import { Image } from '../interfaces';
import { LoadingBox } from './LoadingBox';
import { Modal } from '../../core';

interface Props {
  stamped?: boolean;
  blurred?: boolean;
  unconstrained?: boolean;
  fullable?: boolean;
  toggleModal(): void;
  prevImage?(): void;
  nextImage?(): void;
  image: Image;
}

interface State {
  isFull: boolean;
}

export class ImageModal extends React.PureComponent<Props, State> {
  static defaultProps: Partial<Props> = {
    stamped: false,
    blurred: false,
    unconstrained: false,
    fullable: false,
  };

  state: Readonly<State> = {
    isFull: false,
  };

  toggleFull = () => this.setState(({ isFull }) => ({ isFull: !isFull }));
  setFull = (isFull: boolean) => this.setState({ isFull });

  render() {
    const {
      toggleModal,
      prevImage,
      nextImage,
      stamped,
      blurred,
      unconstrained,
      fullable,
      image,
    } = this.props;
    const { isFull } = this.state;
    return (
      <Modal blurred={blurred} hide={toggleModal}>
        <div
          className={classNames('modal-content animated faster zoomIn', {
            'unconstrained-modal-content': unconstrained,
            'fullscreen-modal-content': isFull,
          })}>
          <div className="level image-level is-mobile">
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
              {image.description && (
                <div className="level-item">
                  <p className="has-text-centered">
                    <span className="has-text-grey-light">{image.description}</span>
                  </p>
                </div>
              )}
            </div>
            <div className="level-right">
              {image.tags && (
                <div className="level-item">
                  <div className="tags">
                    {image.tags.map((tag) => (
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
              {fullable && (
                <div className="level-item is-hidden-mobile">
                  <a className="has-text-white-ter is-pulled-right" onClick={this.toggleFull}>
                    <span className="icon is-small">
                      <i className={classNames('fas', isFull ? 'fa-compress' : 'fa-expand')}></i>
                    </span>
                  </a>
                </div>
              )}
            </div>
          </div>
          <Fullscreen enabled={isFull} onChange={this.setFull}>
            <Img
              className="modal-image"
              src={image.original}
              placeholder={<LoadingBox />}
              onDoubleClick={() => window.open(image.original)}
            />
            {stamped && (
              <div className="animated delay-1s fadeIn">
                <div className="image-stamp stamp-purple"></div>
                <div className="image-stamp stamp-blue"></div>
                <div className="image-stamp-text">AS</div>
              </div>
            )}
          </Fullscreen>
        </div>
        <button className="modal-close is-large" onClick={toggleModal} />
      </Modal>
    );
  }
}
