import { SingletonImage, MultiGroup, ImageCollection } from '../interfaces';
import { Image } from '../../base';

export const enumPhotos = (photos: ImageCollection): ImageCollection => {
  let count = 0;
  const mapFn = (image: Image): Image => ({ ...image, id: count++ });
  return photos.map((group) => {
    switch (group.type) {
      case 'multi':
        return {
          type: 'multi',
          images: (group as MultiGroup).images.map(mapFn),
          wide: (group as MultiGroup).wide,
        };
      case 'singleton':
      default:
        return {
          type: 'singleton',
          image: mapFn((group as SingletonImage).image),
        };
    }
  });
};
