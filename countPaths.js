// With Memoization
// Time complexity - O(n)
// Dynamic Programming

const delimiter = '::';

const countPaths = (m, n, memo = {}) => {
  if (m <= 0 || n <= 0) return 0;
  if (m === 1 || n === 1) return 1;

  const cellKey = `${m}${delimiter}${n}`;
  if (memo[cellKey]) return memo[cellKey];

  const leftCellKey = `${m - 1}${delimiter}${n}`
  const rigthCellKey = `${m}${delimiter}${n - 1}`

  const pathsToLeftCell = memo[leftCellKey] || countPaths(m - 1, n, memo);
  const pathsToAboveCell = memo[rigthCellKey] || countPaths(m, n - 1, memo);
  const totalPaths = pathsToLeftCell + pathsToAboveCell;

  memo[leftCellKey] = pathsToLeftCell;
  memo[rigthCellKey] = pathsToAboveCell;
  memo[cellKey] = totalPaths;

  return totalPaths;
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