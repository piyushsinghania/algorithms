// With Memoization
// Time complexity - O(n)
// Dynamic Programming

const countPaths = (m, n, memo = {}) => {
  if (m <= 0 || n <= 0) return 0;
  if (m === 1 || n === 1) return 1;

  const key = `${m},${n}`;
  if (memo[key]) return memo[key];

  memo[key] = countPaths(m - 1, n, memo) + countPaths(m, n - 1, memo);
  return memo[key];
}

// Without Memoization
// Time complexity - O(2^n)
// Divide and Conquer
/* const countPaths = (m, n) => {
  if (m <= 0 || n <= 0) return 0;
  if (m === 1 || n === 1) return 1;

  return countPaths(m - 1, n) + countPaths(m, n - 1);
} */

console.log(countPaths(10, 30));