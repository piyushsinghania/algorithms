const isUnique = (str) => {
  return new Set(str).size === str.length;
};

// Sliding Window Approach
// Time Complexity - O(n^2) - Quadratic - Because of slice method
// const lengthOfLongestSubstring = (str) => {
//   if (str.length <= 1) return str.length;

//   let left = 0;
//   let maxWindowSize = 1;

//   for (let right = 1; right <= str.length; right++) {
//     const substring = str.slice(left, right);
//     if (isUnique(substring)) {
//       maxWindowSize = Math.max(substring.length, maxWindowSize);
//     } else {
//       left++;
//     }
//   }

//   return maxWindowSize;
// };

// Sliding Window Approach
// Time Complexity - O(n) - Linear - Using a charIndex
const lengthOfLongestSubstring = (str) => {
  if (str.length <= 1) return str.length;

  let maxWindowSize = 0;
  let windowStart = 0;
  let charIndex = {};

  for (let end = 0; end < str.length; end++) {
    const char = str[end];

    if (char in charIndex && charIndex[char] >= windowStart) {
      windowStart = charIndex[char] + 1;
    }

    charIndex[char] = end;
    maxWindowSize = Math.max(maxWindowSize, end - windowStart + 1);
  }

  return maxWindowSize;
};

console.log('pbbabcbadb', lengthOfLongestSubstring('pbbabcbadb')); // 4
console.log('abcabcbb', lengthOfLongestSubstring('abcabcbb')); // 3
console.log('bbbbb', lengthOfLongestSubstring('bbbbb')); // 1
console.log('pwwkew', lengthOfLongestSubstring('pwwkew')); // 3
console.log('', lengthOfLongestSubstring('')); // 0
console.log('a', lengthOfLongestSubstring('a')); // 1
console.log('abcd', lengthOfLongestSubstring('abcd')); // 4
console.log('dvdf', lengthOfLongestSubstring('dvdf')); // 3
console.log('tmmzuxt', lengthOfLongestSubstring('tmmzuxt')); // 5
console.log('anviaj', lengthOfLongestSubstring('anviaj')); // 5
console.log('abcdefga', lengthOfLongestSubstring('abcdefga')); // 7
console.log('aabbccddeeff', lengthOfLongestSubstring('aabbccddeeff')); // 2
console.log(
  'abcdefghijklmnopqrstuvwxyz',
  lengthOfLongestSubstring('abcdefghijklmnopqrstuvwxyz')
); // 26
