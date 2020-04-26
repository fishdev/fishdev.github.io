import React from 'react';

import { SingletonImage } from '../interfaces';
import { ImageBox } from '../../core';

export const GiantImage: React.FC<SingletonImage> = ({ image }) => (
  <div className="column is-6">
    <ImageBox {...image} stamped />
  </div>
);
