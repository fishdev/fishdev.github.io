import React from 'react';
import classNames from 'classnames';
import { LazyLoadImage as Img } from 'react-lazy-load-image-component';

import { Image } from '../interfaces/Image';
import { LoadingBox } from './LoadingBox';

interface Props extends Image {
  caption?: 'tooltip' | 'visible' | 'hidden';
  stamped?: boolean;
  constrained?: boolean;
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
    stamped: false,
    constrained: false,
  };

  toggleModal = () => this.setState(({ modalActive }) => ({ modalActive: !modalActive }));

  render() {
    const { original, thumbnail, description, caption, stamped, constrained } = this.props;
    const { modalActive } = this.state;
    return (
      <React.Fragment>
        <div className="has-text-centered">
          <div
            onClick={this.toggleModal}
            className={classNames('zoomable', {
              tooltip: caption === 'tooltip' && description,
            })}
            data-tooltip={description}>
            <Img
              style={{ maxHeight: 400, width: 'auto' }}
              className="image-fullwidth rounded"
              src={thumbnail || original}
              placeholder={<LoadingBox />}
            />
          </div>
          {description && caption === 'visible' && (
            <p className="has-text-grey has-text-centered">{description}</p>
          )}
        </div>
        <div className={classNames('modal', { 'is-active': modalActive })}>
          <div className="modal-background" onClick={this.toggleModal} />
          <div
            className={classNames('modal-content animated faster zoomIn', {
              'image-modal-content': !constrained,
            })}>
            <Img className="modal-image" src={original} placeholder={<LoadingBox />} />
            {stamped && (
              <React.Fragment>
                <div className="image-stamp stamp-purple"></div>
                <div className="image-stamp stamp-blue"></div>
                <div className="image-stamp-text">AS</div>
              </React.Fragment>
            )}
            {description && <p className="has-text-grey has-text-centered">{description}</p>}
          </div>
          <button className="modal-close is-large" onClick={this.toggleModal} />
        </div>
      </React.Fragment>
    );
  }
}
