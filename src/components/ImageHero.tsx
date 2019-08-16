import React from 'react';

interface Props {
  url: string;
  credit?: string;
}

export const ImageHero: React.FC<Props> = ({ url }) => (
  <figure className="image image-hero-container">
    <img className="image-hero" src={url} />
  </figure>
);
