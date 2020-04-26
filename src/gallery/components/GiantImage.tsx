import React from 'react';

import { SingletonImage } from '../interfaces';
import { ImageBox } from '../../core';

interface Props extends SingletonImage {
  showModalFn?(id: number): void;
}

export const GiantImage: React.FC<Props> = ({ image, showModalFn }) => (
  <div className="column is-6">
    <ImageBox data={image} showModalFn={showModalFn} />
  </div>
);
