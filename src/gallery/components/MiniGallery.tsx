import React from 'react';
import classNames from 'classnames';

import { ImageView } from '../interfaces';
import { ImageBox } from '../../base';

interface Props {
  collection: Array<ImageView>;
  size: 'small' | 'medium' | 'large';
  showModalFn?(id: number): void;
}

const SIZES = {
  small: 'is-12 is-6-mobile',
  medium: 'is-6',
  large: 'is-3 is-6-mobile',
};

export const MiniGallery: React.FC<Props> = ({ collection, size, showModalFn }) => (
  <div className="columns is-mobile is-multiline is-vcentered">
    {collection.map((imageView, i) => (
      <div key={i} className={classNames('column', SIZES[size])}>
        <ImageBox image={imageView.image} showModalFn={showModalFn} maxHeight={'small'} />
      </div>
    ))}
  </div>
);
