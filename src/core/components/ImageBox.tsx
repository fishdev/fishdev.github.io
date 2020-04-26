import React from 'react';
import classNames from 'classnames';
import { LazyLoadImage as Img } from 'react-lazy-load-image-component';

import { Image } from '../interfaces/Image';
import { LoadingBox } from './LoadingBox';
import { ImageModal } from './ImageModal';

interface Props {
  caption?: 'tooltip' | 'visible' | 'hidden';
  maxHeight?: 'large' | 'small' | 'none';
  showModalFn?(id: number): void;
  data: Image;
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

  toggleModal = () => {
    console.log('hello');
    this.setState(({ modalActive }) => ({ modalActive: !modalActive }));
  };

  render() {
    const { data, caption, maxHeight, showModalFn } = this.props;
    const { modalActive } = this.state;
    return (
      <React.Fragment>
        <div className="has-text-centered">
          <div
            onClick={showModalFn ? () => showModalFn(data.id || 0) : this.toggleModal}
            className={classNames('zoomable', {
              tooltip: caption === 'tooltip' && data.description,
            })}
            data-tooltip={data.description}>
            <Img
              className={classNames('image-box rounded', {
                'max-height-large': maxHeight === 'large',
                'max-height-small': maxHeight === 'small',
              })}
              src={data.thumbnail || data.original}
              placeholder={<LoadingBox />}
            />
          </div>
          {data.description && caption === 'visible' && (
            <p className="has-text-grey has-text-centered">{data.description}</p>
          )}
        </div>
        {!showModalFn && modalActive && (
          <ImageModal {...this.props} toggleModal={this.toggleModal} />
        )}
      </React.Fragment>
    );
  }
}
