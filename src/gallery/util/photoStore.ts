import { getData } from '../../data';

const GALLERY_LOCALSTORAGE_KEY = 'gallery_seen';

const userGalleryState = (): Array<String | undefined> => {
  const store = localStorage.getItem(GALLERY_LOCALSTORAGE_KEY);
  if (!store) return [];
  return JSON.parse(store);
};

let currentGalleryStateMemo: string[] | null = null;

export const currentGalleryState = () => {
  if (!currentGalleryStateMemo) {
    const gallery = getData().gallery!;
    if (!gallery) return [];
    currentGalleryStateMemo = gallery.map((imageView) => imageView.image.title!);
  }
  return currentGalleryStateMemo!;
};

export const userHasSeenGallery = () => {
  const state = userGalleryState();
  const current = currentGalleryState();
  return state.every((_, i) => state[i] === current[i]);
};

export const writeGalleryView = () =>
  localStorage.setItem(GALLERY_LOCALSTORAGE_KEY, JSON.stringify(currentGalleryState()));

export const userHasSeenPhoto = (title: string) => currentGalleryState().includes(title);
