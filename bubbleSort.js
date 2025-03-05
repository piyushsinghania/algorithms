const bubbleSort = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    let swappedValues = false;

    for (let j = 0; j < i; j++) {
      iterationCount++;
      if (arr[j] > arr[j + 1]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
        swappedValues = true;
      }
    }

    if (!swappedValues) {
      break;
    }
  }

  return arr;
}

const arr = [10, 1, 5, 7, 9, 3, 8, 4, 6, 2];
console.log(bubbleSort(arr));