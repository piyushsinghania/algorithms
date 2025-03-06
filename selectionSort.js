// Time Complexity = O(n^2)
const selectionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let minItemIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minItemIndex]) {
        minItemIndex = j;
      }
    }

    if (i !== minItemIndex) {
      [arr[i], arr[minItemIndex]] = [arr[minItemIndex], arr[i]];
    }
  }

  return arr;
}

const arr = [10, 1, 5, 7, 9, 3, 8, 4, 6, 2];
console.log(selectionSort(arr));