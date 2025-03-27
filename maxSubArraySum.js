// Sliding Window Algorithm
// Time Complexity - O(n)

const maxSubArraySum = (arr, k) => {
  if (arr.length < k) return null;

  // first window sum
  let windowSum = arr.slice(0, k).reduce((sum, element) => sum + element, 0);
  let maxSum = windowSum;

  // slide window over array
  for (let i = k; i < arr.length; i++) {
    const itemEnteringWindow = arr[i];
    const itemLeavingWindow = arr[i - k];
    windowSum += itemEnteringWindow - itemLeavingWindow;
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
};

const arr = [1, 9, 8, 6, 4, 8, 2];
console.log(maxSubArraySum(arr, 3));
