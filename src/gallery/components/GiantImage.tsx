import React from 'react';

import { SingletonImage } from '../interfaces';
import { ImageBox } from '../../base';
import ScrollAnimation from 'react-animate-on-scroll';

interface Props extends SingletonImage {
  showModalFn?(id: number): void;
}

export const GiantImage: React.FC<Props> = ({ image, showModalFn }) => (
  <div className="column is-6">
    <ScrollAnimation animateIn="fadeIn" delay={500}>
      <ImageBox data={image} showModalFn={showModalFn} />
    </ScrollAnimation>
  </div>
);
