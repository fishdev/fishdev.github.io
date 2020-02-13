import React from 'react';
import classNames from 'classnames';
import { LazyLoadImage as Img } from 'react-lazy-load-image-component';

import { Image } from '../interfaces/Image';
import { LoadingBox } from './LoadingBox';

interface Props extends Image {
  tooltipCaption?: boolean;
}

interface State {
  modalActive: boolean;
}

export class ImageBox extends React.PureComponent<Props, State> {
  state: Readonly<State> = {
    modalActive: false,
  };

  static defaultProps: Partial<Props> = {
    tooltipCaption: false,
  };

  toggleModal = () => this.setState(({ modalActive }) => ({ modalActive: !modalActive }));

  render() {
    const { original, thumbnail, description, tooltipCaption } = this.props;
    const { modalActive } = this.state;
    return (
      <React.Fragment>
        <div className="has-text-centered">
          <div
            onClick={this.toggleModal}
            className={classNames('zoomable', {
              tooltip: tooltipCaption && description,
            })}
            data-tooltip={description}>
            <Img
              style={{ maxHeight: 400, width: 'auto' }}
              className="image-fullwidth rounded"
              src={thumbnail || original}
              placeholder={<LoadingBox />}
            />
          </div>
          {description && !tooltipCaption && (
            <p className="has-text-grey has-text-centered">{description}</p>
          )}
        </div>
        <div className={classNames('modal', { 'is-active': modalActive })}>
          <div className="modal-background" onClick={this.toggleModal} />
          <div className="modal-content">
            <Img
              style={{ maxHeight: 'calc(100vh - 160px)' }}
              src={original}
              placeholder={<LoadingBox />}
            />
          </div>
          <button className="modal-close is-large" onClick={this.toggleModal} />
        </div>
      </React.Fragment>
    );
  }
}
