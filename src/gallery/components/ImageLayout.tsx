import React from 'react';
import { GlobalHotKeys } from 'react-hotkeys';

import { ImageModal, Image } from '../../base';
import { ImageView } from '../interfaces';
import { MiniGallery } from './MiniGallery';
import { GiantImage } from './GiantImage';
import { flattenPhotos } from '../util';

interface Props {
  collection: Array<ImageView>;
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

  flatPhotos: Image[] = flattenPhotos(this.props.collection);

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
    if (prevProps.collection !== this.props.collection)
      this.flatPhotos = flattenPhotos(this.props.collection);
  }

  render() {
    const { collection } = this.props;

    const images = [];
    for (let i = 0; i < collection.length; i++) {
      const mini = [];
      const giant;
      while (!collection[i].wide) {
        mini.push(collection[i]);
      }
      images.push(<MiniGallery key={i} collection={mini})
    }

    /* collection.map((group, i) => {
      switch (group.type) {
        case 'multi':
          return <MiniGallery key={i} {...(group as MultiGroup)} showModalFn={this.showModal} />;
        case 'singleton':
        default:
          return <GiantImage key={i} {...(group as SingletonImage)} showModalFn={this.showModal} />;
      }
    }); */

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
            image={this.flatPhotos[currentImage]}
            toggleModal={this.toggleModal}
            prevImage={currentImage > 0 ? this.prevImage : undefined}
            nextImage={currentImage < this.flatPhotos.length - 1 ? this.nextImage : undefined}
          />
        )}
      </GlobalHotKeys>
    );
  }
}
