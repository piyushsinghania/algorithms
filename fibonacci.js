// const fibonacci = (n) => {
//   if (n < 1) return 0;

//   let prev = 1;
//   let current = 1;

//   for (let i = 3; i <= n; i++) {
//     let next = prev + current;
//     prev = current;
//     current = next;
//   }

//   return current;
// };

// const fibonacci = (n) => {
//   if (n < 1) return 0;
//   if (n === 1) return 1;

//   return fibonacci(n - 1) + fibonacci(n - 2);
// };

// Dynamic Programming
// Time Complexity = O(n)
const fibonacci = (n, memo = {}) => {
  if (n in memo) return memo[n];

  if (n < 1) return 0;
  if (n === 1) return 1;

  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
};

console.log(fibonacci(6));
