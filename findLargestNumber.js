const findLargestNumber = (array) => {
  if (array.length === 0) return 0;
  if (array.length === 1) return array[0];

  const mid = Math.floor(array.length / 2);
  const largestLeftNumber = findLargestNumber(array.slice(0, mid));
  const largestRightNumber = findLargestNumber(array.slice(mid));

  return Math.max(largestLeftNumber, largestRightNumber);
}

const array = [3, 1, 5, 8, 9, 10, 4, 6, 2, 7];
console.log(findLargestNumber(array));