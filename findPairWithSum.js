// Multiple Pointers
// Time Complexity - O(n)
const findPairWithSum = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) {
      return [arr[left], arr[right]];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return [];
};

const arr = [1, 2, 4, 6, 8, 8, 9];
const target = 14;
console.log(findPairWithSum(arr, target));
