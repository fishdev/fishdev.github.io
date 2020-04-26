import { ImageGroup } from './ImageGroup';
import { Image } from '../../core';

export interface MultiGroup extends ImageGroup {
  images: Image[];
  wide: boolean;
}
