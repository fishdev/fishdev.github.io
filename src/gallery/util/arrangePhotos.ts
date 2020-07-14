import { ImageView } from '../interfaces';

export const arrangePhotos = (collection: ImageView[]): ImageView[][][] => {
  console.log(collection);
  const images = [];
  for (let i = 0; i < collection.length; ) {
    const row = [];
    if (collection[i].wide) {
      row.push([collection[i++]]);
      // O O
      if (collection[i].wide) {
        row.push([collection[i++]]);
      }
      // O : :
      else {
        row.push(collection.slice(i, (i += 4)));
      }
    } else if (collection[i + 2].wide) {
      // : O :
      row.push(collection.slice(i, (i += 2)));
      row.push([collection[i++]]);
      row.push(collection.slice(i, (i += 2)));
    } else if (collection[i + 4].wide) {
      // : : O
      row.push(collection.slice(i, (i += 4)));
      row.push([collection[i++]]);
    } else {
      // . . . .
      row.push(collection.slice(i, (i += 4)));
    }
    images.push(row);
  }
  console.log(images);
  return images;
};
