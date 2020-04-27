import { flattenPhotos } from './flattenPhotos';
import { ImageCollection } from '../interfaces';

export const filterPhotos = (photos: ImageCollection, filterTags: string[]) => {
  const tagsMatch = (tags: string[]): boolean =>
    tags.reduce((acc: boolean, tag: string) => acc || filterTags.includes(tag), false);
  return flattenPhotos(photos).filter((image) => tagsMatch(image.tags || []));
};
