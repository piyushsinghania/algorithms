// Iterative Approach
// Time complexity - O(n^2)
const cartesianProduct = (arr1, arr2) => {
  const result = [];

  for (let x of arr1) {
    for (let y of arr2) {
      result.push([x, y]);
    }
  }

  return result;
};

const arr1 = ['a', 'b'];
const arr2 = [1, 2, 3];
console.log(cartesianProduct(arr1, arr2));
