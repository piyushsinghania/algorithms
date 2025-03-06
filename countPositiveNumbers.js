// Given an array of numbers, count positive numbers

// Time Complexity = O(n)
const countPositiveNumbers = (arr) => {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      count++;
    }
  }

  return count;
}

const count = countPositiveNumbers([-10, -20, 10, 20, 30, 40, -30, -40])
console.log("Number of positive numbers:", count);