import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import { SingletonImage } from '../interfaces';
import { ImageBox } from '../../base';

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
