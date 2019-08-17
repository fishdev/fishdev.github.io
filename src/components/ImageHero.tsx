import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

interface Props {
  url: string;
  credit?: string;
}

export const ImageHero: React.FC<Props> = ({ url, credit }) => (
  <ScrollAnimation animateIn="fadeInUp" animateOnce>
    <figure className="image image-hero-container">
      <img className="image-hero" src={url} alt={credit} />
      {credit && (
        <p className="image-hero-text has-text-grey has-text-right is-hidden-mobile">
          <small>{credit}</small>
        </p>
      )}
    </figure>
  </ScrollAnimation>
);
