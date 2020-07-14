import { ImageView } from '../interfaces';

export const filterPhotos = (photos: Array<ImageView>, filterTags: string[]) => {
  if (filterTags.length === 0) return photos;
  const tagsMatch = (tags: string[]): boolean =>
    tags.reduce((acc: boolean, tag: string) => acc || filterTags.includes(tag), false);
  return photos.filter((imageView) => tagsMatch(imageView.image.tags || []));
};
