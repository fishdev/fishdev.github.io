import { SingletonImage, MultiGroup, ImageCollection } from '../interfaces';
import { Image } from '../../base';

export const flattenPhotos = (photos: ImageCollection): Image[] =>
  photos
    .map((group) => {
      switch (group.type) {
        case 'multi':
          return (group as MultiGroup).images;
        case 'singleton':
        default:
          return (group as SingletonImage).image;
      }
    })
    .flat();
