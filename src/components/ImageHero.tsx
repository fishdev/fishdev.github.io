import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

interface Props {
  url: string;
  credit?: string;
}

export const ImageHero: React.FC<Props> = ({ url }) => (
  <ScrollAnimation animateIn="fadeInUp" animateOnce>
    <figure className="image">
      <img className="image-hero" src={url} />
    </figure>
  </ScrollAnimation>
);
