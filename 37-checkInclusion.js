/* 
Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
In other words, return true if one of s1's permutations is the substring of s2.

Example 1:
Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").

Example 2:
Input: s1 = "ab", s2 = "eidboaoo"
Output: false
*/

// input: two strings
// output: boolean 
const checkInclusion = (s1, s2) => {
  // initialize two arrays, count1 and count2, of size 26, to represent character counts in each 
  const count1 = new Array(26).fill(0);
  const count2 = new Array(26).fill(0);
  // declare a const charToIndex to a function to convert the char to the index in the count array
  const charToIndex = char => char.charCodeAt(0) - 'a'.charCodeAt(0);
  // initialize count1 with the character counts of s1
  for (const char of s1) {
    count1[charToIndex(char)]++;
  }
  // use a sliding window approach to check the permutations in s2
  for (let i = 0; i < s2.length; i++) {
    // increment the count for character in current window of s2 
    count2[charToIndex(s2[i])]++;
    // if the window exceeds s1's length, remove the first character of the window 
    if (i >= s1.length) count2[charToIndex(s2[i - s1.length])]--;
    // check if the char counts in current window match counts in s1, and return true if so 
    if (i >= s1.length - 1) {
      if (count1.every((count, idx) => count === count2[idx])) return true;
    }
  }
  // return false if no permutation is found after full traversal 
  return false;
};

/* // TESTS:
console.log(checkInclusion("ab", "eidbaooo")); // -> true
console.log(checkInclusion("ab", "eidboaoo")); // -> false 
 */