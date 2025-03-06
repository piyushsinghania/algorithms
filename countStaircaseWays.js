// Given n, the total number of steps in a staircase, and the ability to climb either 1 step or 2 steps at a time, how many distinct ways can you reach the top?

// Divide and Conquer
// Time Complexity = O(2^n)
// const countStaircaseWays = (n) => {
//   if (n <= 0) return 0;
//   if (n === 1) return 1;
//   if (n === 2) return 2;

//   return countStaircaseWays(n - 1) + countStaircaseWays(n - 2);
// };

// Dynamic Programming
// Time Complexity = O(n)
const countStaircaseWays = (n, memo = {}) => {
  if (n in memo) return memo[n];

  if (n <= 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 2;

  memo[n] = countStaircaseWays(n - 1, memo) + countStaircaseWays(n - 2, memo);
  return memo[n];
};

// const countStaircaseWays = (n) => {
//   if (n <= 0) return 0;

//   const possibleWays = {
//     1: 1,
//     2: 2,
//   };

//   for (let i = 3; i <= n; i++) {
//     possibleWays[i] = possibleWays[i - 1] + possibleWays[i - 2];
//   }

//   return possibleWays[n];
// };

// Time Complexity = O(n) - Linear Time
// const countStaircaseWays = (n) => {
//   if (n <= 0) return 0;
//   if (n === 1) return 1;
//   if (n === 2) return 2;

//   let waysToReachPreviousStep = 2;
//   let waysToReachTwoStepsBack = 1;
//   let totalWays = 0;

//   for (i = 3; i <= n; i++) {
//     totalWays = waysToReachPreviousStep + waysToReachTwoStepsBack;

//     waysToReachTwoStepsBack = waysToReachPreviousStep;
//     waysToReachPreviousStep = totalWays;
//   }

//   return totalWays;
// };

const start = performance.now();
const possibleWays = countStaircaseWays(50);
console.log(possibleWays);
const end = performance.now();
console.log('Time taken:', end - start);
