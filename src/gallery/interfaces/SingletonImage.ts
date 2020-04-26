import { ImageGroup } from './ImageGroup';
import { Image } from '../../core';

export interface SingletonImage extends ImageGroup {
  image: Image;
}
