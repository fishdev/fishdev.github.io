import { ImageGroup } from './ImageGroup';
import { Image } from '../../base';

export interface SingletonImage extends ImageGroup {
  image: Image;
}
