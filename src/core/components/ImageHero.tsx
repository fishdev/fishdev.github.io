import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import { Image } from '../interfaces';

export const ImageHero: React.FC<Image> = ({ original, description }) => (
  <ScrollAnimation animateIn="fadeInUp" animateOnce>
    <figure className="image image-hero-container">
      <img className="image-hero" src={original} alt={description} />
      {description && (
        <p className="image-hero-text has-text-grey has-text-right is-hidden-mobile">
          <small>{description}</small>
        </p>
      )}
    </figure>
  </ScrollAnimation>
);
