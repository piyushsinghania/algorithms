// Multiple Pointers Approach
// Time Complexity - O(n)
const isPalindrome = (str) => {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};

console.log('racecar:', isPalindrome('racecar'));
console.log('madam:', isPalindrome('madam'));
console.log('maam:', isPalindrome('maam'));
console.log('hello:', isPalindrome('hello'));
