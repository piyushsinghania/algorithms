// Multiple Pointers Approach
// Time Complexity - O(n)
const isPalindrome = (str) => {
  let i = 0;
  let j = str.length - 1;

  while (i < j) {
    if (str[i] !== str[j]) {
      return false;
    }
    i++;
    j--;
  }

  return true;
};

console.log('racecar:', isPalindrome('racecar'));
console.log('madam:', isPalindrome('madam'));
console.log('maam:', isPalindrome('maam'));
console.log('hello:', isPalindrome('hello'));
