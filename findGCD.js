// Time Complexity - O(min(a, b))
/* const findGCD = (a, b) => {
  if (a === 0) return b;
  if (b === 0) return a;

  let i = Math.min(a, b);

  while (i > 0) {
    if (a % i === 0 && b % i === 0) {
      return i;
    }
    i--;
  }
}; */

// Recursive Approach
// Time Complexity - O(log(min(a, b)))
const findGCD = (a, b) => {
  if (b === 0) return a;

  return findGCD(b, a % b);
};

console.log(findGCD(5, 15));
