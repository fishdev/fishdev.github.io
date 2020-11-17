import { ImageView } from '../interfaces';

const getRowLayout = (row: ImageView[][]) => {
  const isWide = row.length === 1;
  return row
    .map((arr) => {
      if (arr.length === 1) return 'O';
      else if (arr.length === 2) return ':';
      else return isWide ? '....' : '::';
    })
    .join('');
};

export const arrangePhotos = (collection: ImageView[]): ImageView[][][] => {
  const images = [];
  for (let i = 0; i < collection.length; ) {
    const prevLayout = images.length > 0 ? getRowLayout(images[images.length - 1]) : '';
    const row = [];
    if (i + 1 < collection.length && collection[i].wide && collection[i + 1].wide) {
      // O O
      row.push([collection[i++]]);
      row.push([collection[i++]]);
    } else if (prevLayout !== 'O::' && collection[i].wide) {
      // O : :
      row.push([collection[i++]]);
      row.push(collection.slice(i, (i += 4)));
    } else if (i + 2 < collection.length && collection[i + 2].wide) {
      // : O :
      row.push(collection.slice(i, (i += 2)));
      row.push([collection[i++]]);
      row.push(collection.slice(i, (i += 2)));
    } else if (prevLayout !== '::O' && i + 4 < collection.length && collection[i + 4].wide) {
      // : : O
      row.push(collection.slice(i, (i += 4)));
      row.push([collection[i++]]);
    } else {
      // . . . .
      row.push(collection.slice(i, (i += 4)));
    }
    images.push(row);
  }
  return images;
};
