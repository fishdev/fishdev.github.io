import React from 'react';

import { ScrollToTop, Footer, Navbar, MetaTags } from '../../core/';
import { photos } from '../../assets/data';
import { MultiGroup, SingletonImage } from '../interfaces';
import { MiniGallery, GiantImage } from '../components';

export const Gallery: React.FC = () => {
  const images = photos.map((group) => {
    switch (group.type) {
      case 'multi':
        return <MiniGallery {...(group as MultiGroup)} />;
      case 'singleton':
      default:
        return <GiantImage {...(group as SingletonImage)} />;
    }
  });
  return (
    <div>
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
      <Footer />
    </div>
  );
};
