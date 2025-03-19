// Anagrams - two words are called anagrams if
// the characters of one word could be re-arranged to form the other word
// For example - loop & pool, asleep and please

// Using frequency counting to check if two strings are anagrams
// Time complexity O(n) - Where n is the number of characters of a string
const areAnagrams = (str1, str2) => {
  if (str1.length !== str2.length) false;

  const frequency = {};

  for (const char of str1) {
    frequency[char] = (frequency[char] || 0) + 1;
  }

  for (const char of str2) {
    if (!frequency[char]) {
      return false;
    }
    frequency[char]--;
  }

  return true;
};

console.log(areAnagrams('please', 'asleep'));
