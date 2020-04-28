export const arrToSentence = (arr: string[]) => {
  if (arr.length === 0) return '';
  const last = arr[arr.length - 1];
  return (
    arr.slice(0, -1).join(', ') +
    (arr.length > 2 ? ',' : '') +
    (arr.length > 1 ? ' and ' : '') +
    last
  );
};

export const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export const capitalizeSentence = (str: string) => str.split(' ').map(capitalize).join(' ');
