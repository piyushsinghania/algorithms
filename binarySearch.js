// Time Complexity = O(log n)
const binarySearch = ({ key, array, start = 0, end = array.length - 1 }) => {
  if (start > end) return -1;

  const middle = Math.floor((start + end) / 2);

  if (key < array[middle]) {
    return binarySearch({ key, array, start, end: middle - 1 });
  }

  if (key > array[middle]) {
    return binarySearch({ key, array, start: middle + 1, end });
  }

  return middle;
};

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const index = binarySearch({
  key: 2,
  array: array,
  start: 0,
  end: array.length - 1,
});
console.log('index', index);
