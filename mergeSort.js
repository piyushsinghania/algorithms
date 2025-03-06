const mergeTwoSortedArrays = (arrayOne, arrayTwo) => {
  let i = 0;
  let j = 0;

  const mergedArray = [];

  while (i < arrayOne.length && j < arrayTwo.length) {
    if (arrayOne[i] < arrayTwo[j]) {
      mergedArray.push(arrayOne[i]);
      i++;
    } else {
      mergedArray.push(arrayTwo[j]);
      j++;
    }
  }

  while (i < arrayOne.length) {
    mergedArray.push(arrayOne[i]);
    i++;
  }

  while (j < arrayTwo.length) {
    mergedArray.push(arrayTwo[j]);
    j++;
  }

  return mergedArray;
}

// Dynamic Programming
// Time Complexity = O(nlogn)
const mergeSort = (array) => {
  if (array.length <= 1) return array;

  const mid = Math.floor(array.length / 2);
  const leftSortedArray = mergeSort(array.slice(0, mid));
  const rightSortedArray = mergeSort(array.slice(mid))
  return mergeTwoSortedArrays(leftSortedArray, rightSortedArray);
}

const array = [3, 1, 5, 8, 9, 7, 4, 6, 2];
console.log(mergeSort(array))