import React from 'react';
import classNames from 'classnames';
import { LazyLoadImage as Img } from 'react-lazy-load-image-component';

import { Image } from '../interfaces';
import { LoadingBox } from './LoadingBox';
import { ImageModal } from './ImageModal';

interface Props {
  caption?: 'tooltip' | 'visible' | 'hidden';
  maxHeight?: 'large' | 'small' | 'none';
  showModalFn?(id: number): void;
  image: Image;
}

interface State {
  modalActive: boolean;
}

export class ImageBox extends React.PureComponent<Props, State> {
  state: Readonly<State> = {
    modalActive: false,
  };

  static defaultProps: Partial<Props> = {
    caption: 'hidden',
    maxHeight: 'large',
  };

  toggleModal = () => this.setState(({ modalActive }) => ({ modalActive: !modalActive }));

  render() {
    const { image, caption, maxHeight, showModalFn } = this.props;
    const { modalActive } = this.state;
    return (
      <React.Fragment>
        <div className="has-text-centered">
          <div
            onClick={showModalFn ? () => showModalFn(image.id || 0) : this.toggleModal}
            className={classNames('zoomable', {
              tooltip: caption === 'tooltip' && image.description,
            })}
            data-tooltip={image.description}>
            <Img
              className={classNames('image-box rounded', {
                'max-height-large': maxHeight === 'large',
                'max-height-small': maxHeight === 'small',
              })}
              src={image.thumbnail || image.original}
              placeholder={<LoadingBox />}
            />
          </div>
          {image.description && caption === 'visible' && (
            <p className="has-text-grey has-text-centered">{image.description}</p>
          )}
        </div>
        {!showModalFn && modalActive && (
          <ImageModal {...this.props} toggleModal={this.toggleModal} />
        )}
      </React.Fragment>
    );
  }
}
