import React from 'react';
import classNames from 'classnames';

import { ImageView } from '..';
import { GiantImage } from './GiantImage';
import { MiniGallery } from './MiniGallery';

interface Props {
  collection: ImageView[][];
  showModalFn?(id: number): void;
}

export const ImageRow: React.FC<Props> = ({ collection, showModalFn }) => {
  const isWide = collection.length === 1;
  const views = collection.map((arr, i) => {
    switch (arr.length) {
      case 1:
        return (
          <div key={i} className="column is-6 is-12-mobile">
            <GiantImage imageView={arr[0]} showModalFn={showModalFn} />
          </div>
        );
      case 2:
        return (
          <div key={i} className="column is-3 is-12-mobile">
            <MiniGallery collection={arr} size="medium" showModalFn={showModalFn} />
          </div>
        );
      case 4:
        return (
          <div key={i} className={classNames('column', { 'is-6 is-12-mobile': !isWide })}>
            <MiniGallery
              collection={arr}
              size={isWide ? 'large' : 'medium'}
              showModalFn={showModalFn}
            />
          </div>
        );
      default:
        return new Error('Invalid image row item');
    }
  });
  return <div className="columns is-multiline is-vcentered">{views}</div>;
};
