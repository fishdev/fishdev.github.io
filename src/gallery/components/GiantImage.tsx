import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import { ImageView } from '../interfaces';
import { ImageBox } from '../../base';

interface Props {
  imageView: ImageView;
  showModalFn?(id: number): void;
}

export const GiantImage: React.FC<Props> = ({ imageView, showModalFn }) => (
  <ScrollAnimation animateIn="fadeIn" delay={500}>
    <ImageBox image={imageView.image} showModalFn={showModalFn} />
  </ScrollAnimation>
);
