import { ImageView } from '../interfaces';

export const enumPhotos = (photos: Array<ImageView>) => {
  let count = 0;
  return photos.map((imageView) => ({
    ...imageView,
    image: {
      ...imageView.image,
      id: count++,
    },
  }));
};
