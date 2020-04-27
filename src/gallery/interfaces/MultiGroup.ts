import { ImageGroup } from './ImageGroup';
import { Image } from '../../base';

export interface MultiGroup extends ImageGroup {
  images: Image[];
  wide: boolean;
}
