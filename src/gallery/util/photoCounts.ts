import { flattenPhotos } from './flattenPhotos';
import { getData } from '../../data';

export const getGallerySize = () =>
  flattenPhotos(getData().photos ? getData().photos!.gallery : []).length;

export const userHasSeenGallery = () => {
  const store = localStorage.getItem('gallery_count') || '0';
  return getGallerySize() === parseInt(store);
};
