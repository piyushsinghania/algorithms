const isUnique = (str) => {
  return new Set(str).size === str.length;
};

// Sliding Window Approach + Two pointer approach
// Time Complexity - O(n^2) - Quadratic - Because of slice method
const lengthOfLongestSubstring = (str) => {
  if (str.length <= 1) return str.length;

  let left = 0;
  let maxWindowSize = 1;

  for (let right = 1; right <= str.length; right++) {
    const substring = str.slice(left, right);
    if (isUnique(substring)) {
      maxWindowSize = Math.max(substring.length, maxWindowSize);
    } else {
      left++;
    }
  }

  return maxWindowSize;
};

console.log('pbbabcbadb', lengthOfLongestSubstring('pbbabcbadb'));
console.log('abcabcbb', lengthOfLongestSubstring('abcabcbb'));
console.log('bbbbb', lengthOfLongestSubstring('bbbbb'));
console.log('pwwkew', lengthOfLongestSubstring('pwwkew'));
console.log('', lengthOfLongestSubstring(''));
console.log('a', lengthOfLongestSubstring('a'));
console.log('abcd', lengthOfLongestSubstring('abcd'));
console.log('dvdf', lengthOfLongestSubstring('dvdf'));
console.log('tmmzuxt', lengthOfLongestSubstring('tmmzuxt'));
console.log('anviaj', lengthOfLongestSubstring('anviaj'));
console.log('abcdefga', lengthOfLongestSubstring('abcdefga'));
console.log('aabbccddeeff', lengthOfLongestSubstring('aabbccddeeff'));
console.log(
  'abcdefghijklmnopqrstuvwxyz',
  lengthOfLongestSubstring('abcdefghijklmnopqrstuvwxyz')
);
