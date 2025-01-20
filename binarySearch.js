const binarySearch = ({ key, start, end, array }) => {
  if (!(start <= end)) return -1;

  const middle = Math.floor((start + end) / 2);

  if (key < array[middle]) {
    return binarySearch({ key, start, end: middle - 1, array });
  }

  if (key > array[middle]) {
    return binarySearch({ key, start: middle + 1, end, array });
  }

  return middle;
};

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const index = binarySearch({
  key: 8,
  start: 0,
  end: array.length - 1,
  array: array,
});
console.log('index', index);
