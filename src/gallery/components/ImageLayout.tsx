import React from 'react';

import { ImageModal, Image } from '../../core';
import { MultiGroup, SingletonImage, ImageCollection } from '../interfaces';
import { MiniGallery, GiantImage } from '.';
import { flattenPhotos } from '../util';
import { GlobalHotKeys } from 'react-hotkeys';

interface Props {
  data: ImageCollection;
}

interface State {
  modalActive: boolean;
  currentImage: number;
}

export class ImageLayout extends React.PureComponent<Props, State> {
  state: Readonly<State> = {
    modalActive: false,
    currentImage: 0,
  };

  flatPhotos: Image[] = flattenPhotos(this.props.data);

  prevImage = () =>
    this.setState(({ currentImage }) => ({
      currentImage: currentImage - (currentImage === 0 ? 0 : 1),
    }));
  nextImage = () =>
    this.setState(({ currentImage }) => ({
      currentImage: currentImage + (currentImage === this.flatPhotos.length - 1 ? 0 : 1),
    }));

  showModal = (id: number) =>
    this.setState({ currentImage: id }, () => this.setState({ modalActive: true }));
  toggleModal = () => this.setState(({ modalActive }) => ({ modalActive: !modalActive }));

  componentDidUpdate(prevProps: Props) {
    if (prevProps.data !== this.props.data) this.flatPhotos = flattenPhotos(this.props.data);
  }

  render() {
    const { data } = this.props;
    const images = data.map((group, i) => {
      switch (group.type) {
        case 'multi':
          return <MiniGallery key={i} {...(group as MultiGroup)} showModalFn={this.showModal} />;
        case 'singleton':
        default:
          return <GiantImage key={i} {...(group as SingletonImage)} showModalFn={this.showModal} />;
      }
    });

    const { modalActive, currentImage } = this.state;

    return (
      <GlobalHotKeys
        keyMap={{
          PREV_IMG: 'left',
          NEXT_IMG: 'right',
        }}
        handlers={{
          PREV_IMG: this.prevImage,
          NEXT_IMG: this.nextImage,
        }}>
        <section className="hero is-black is-small">
          <div className="hero-body gallery-container">
            <div className="container">
              <div className="columns is-multiline is-vcentered">{images}</div>
            </div>
          </div>
        </section>
        {modalActive && (
          <ImageModal
            stamped
            blurred
            unconstrained
            fullable
            data={this.flatPhotos[currentImage]}
            toggleModal={this.toggleModal}
            prevImage={currentImage > 0 ? this.prevImage : undefined}
            nextImage={currentImage < this.flatPhotos.length - 1 ? this.nextImage : undefined}
          />
        )}
      </GlobalHotKeys>
    );
  }
}
