import React from 'react';
import classNames from 'classnames';
import { LazyLoadImage as Img } from 'react-lazy-load-image-component';

import { Image } from '../interfaces/Image';
import { LoadingBox } from './LoadingBox';
import { ImageModal } from './ImageModal';

interface Props {
  caption?: 'tooltip' | 'visible' | 'hidden';
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
  };

  toggleModal = () => this.setState(({ modalActive }) => ({ modalActive: !modalActive }));

  render() {
    const { data, caption, showModalFn } = this.props;
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
              style={{ maxHeight: 500, width: 'auto' }}
              className="image-fullwidth rounded"
              src={data.thumbnail || data.original}
              placeholder={<LoadingBox />}
            />
          </div>
          {data.description && caption === 'visible' && (
            <p className="has-text-grey has-text-centered">{data.description}</p>
          )}
        </div>
        {!showModalFn && (
          <ImageModal
            {...this.props}
            active={modalActive}
            toggleModal={this.toggleModal}
            constrained
          />
        )}
      </React.Fragment>
    );
  }
}
