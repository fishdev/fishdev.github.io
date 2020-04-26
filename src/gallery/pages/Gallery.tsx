import React from 'react';

import { ScrollToTop, Footer, Navbar, MetaTags, ImageModal, Image } from '../../core/';
import { photos } from '../../assets/data';
import { MultiGroup, SingletonImage } from '../interfaces';
import { MiniGallery, GiantImage } from '../components';
import { GlobalHotKeys } from 'react-hotkeys';

interface State {
  modalActive: boolean;
  currentImage: number;
}

export class Gallery extends React.PureComponent<{}, State> {
  state: Readonly<State> = {
    modalActive: false,
    currentImage: 0,
  };

  flatPhotos: Image[] = photos
    .map((group) => {
      switch (group.type) {
        case 'multi':
          return (group as MultiGroup).images;
        case 'singleton':
        default:
          return (group as SingletonImage).image;
      }
    })
    .flat();

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

  render() {
    const images = photos.map((group, i) => {
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
        <ScrollToTop />
        <MetaTags name="Gallery" description="My photography, a visual diary" />
        <section className="hero is-black">
          <div className="hero-head">
            <Navbar color="black" showMenu={false} />
          </div>
          <div className="hero-body">
            <div className="container">
              <span className="fancy has-text-centered">
                <h3 className="title gradientbg">Photo Gallery</h3>
                <h5 className="subtitle has-text-grey-light">
                  <span className="icon animated flash">
                    <i className="fas fa-camera" />
                  </span>
                  <span> My visual diary</span>
                </h5>
              </span>
            </div>
          </div>
        </section>
        <section className="hero is-black">
          <div className="hero-body">
            <div className="container">
              <div className="columns is-multiline is-vcentered">{images}</div>
            </div>
          </div>
        </section>
        <ImageModal
          data={this.flatPhotos[currentImage]}
          active={modalActive}
          toggleModal={this.toggleModal}
          prevImage={currentImage > 0 ? this.prevImage : undefined}
          nextImage={currentImage < this.flatPhotos.length - 1 ? this.nextImage : undefined}
        />
        <Footer />
      </GlobalHotKeys>
    );
  }
}
