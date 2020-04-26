import React from 'react';
import classNames from 'classnames';

import { MultiGroup } from '../interfaces';
import { ImageBox } from '../../core';

interface Props extends MultiGroup {
  showModalFn?(id: number): void;
}

export const MiniGallery: React.FC<Props> = ({ images, wide, showModalFn }) => (
  <div className={classNames('column', wide ? 'is-12' : 'is-6')}>
    <div className="columns is-mobile is-multiline is-vcentered">
      {images.map((item, i) => (
        <div key={i} className={classNames('column', wide ? 'is-3-tablet is-6-mobile' : 'is-6')}>
          <ImageBox data={item} showModalFn={showModalFn} maxHeight={'small'} />
        </div>
      ))}
    </div>
  </div>
);
