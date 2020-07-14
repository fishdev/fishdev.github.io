import React from 'react';
import { GlobalHotKeys } from 'react-hotkeys';

import { ImageModal } from '../../base';
import { ImageView } from '../interfaces';
import { arrangePhotos } from '../util';
import { ImageRow } from './ImageRow';

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

  prevImage = () =>
    this.setState(({ currentImage }) => ({
      currentImage: currentImage - (currentImage === 0 ? 0 : 1),
    }));
  nextImage = () =>
    this.setState(({ currentImage }, { collection }) => ({
      currentImage: currentImage + (currentImage === collection.length - 1 ? 0 : 1),
    }));

  showModal = (id: number) =>
    this.setState({ currentImage: id }, () => this.setState({ modalActive: true }));
  toggleModal = () => this.setState(({ modalActive }) => ({ modalActive: !modalActive }));

  render() {
    const { collection } = this.props;
    const { modalActive, currentImage } = this.state;

    const images = arrangePhotos(collection);
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
              {images.map((row, i) => (
                <ImageRow key={i} collection={row} showModalFn={this.showModal} />
              ))}
            </div>
          </div>
        </section>
        {modalActive && (
          <ImageModal
            stamped
            blurred
            unconstrained
            fullable
            image={collection[currentImage].image}
            toggleModal={this.toggleModal}
            prevImage={currentImage > 0 ? this.prevImage : undefined}
            nextImage={currentImage < collection.length - 1 ? this.nextImage : undefined}
          />
        )}
      </GlobalHotKeys>
    );
  }
}
