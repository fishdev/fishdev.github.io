import { getData } from '../../data';

const userGalleryState = (): Array<String | undefined> => {
  const store = localStorage.getItem('gallery_seen');
  if (!store) return [];
  return JSON.parse(store);
};

export const currentGalleryState = () => {
  const gallery = getData().gallery!;
  if (!gallery) return [];
  return gallery.map((imageView) => imageView.image.title);
};

export const userHasSeenGallery = () => {
  const state = userGalleryState();
  const current = currentGalleryState();
  return state.every((_, i) => state[i] === current[i]);
};

export const writeGalleryView = () =>
  localStorage.setItem('gallery_seen', JSON.stringify(currentGalleryState()));
