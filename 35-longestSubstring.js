/* 
Given a string s, find the length of the longest 
substring
without repeating characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

/* OVERALL STRATEGY:
sliding window approach: initialize left and right pointers and keep track of the characters seen so
far. Slide the window and update the set of characters seen so far 
*/

/* TIME AND SPACE COMPLEXITY:
time: O(n) - n is length of input string s
space: O(min(m,n)) - m is size of character set, n is length of input string s 
*/

// input: string
// output: number 
const longestSubstring = s => {
  let left = 0;
  let right = 0;
  let maxLen = 0;
  const seen = {};

  while (right < s.length) {
    const char = s[right];
    if (seen[char]) {
      // Move the left pointer to the right of the last occurrence of the character
      // This effectively removes all characters from the current substring that repeat
      while (s[left] !== char) {
        delete seen[s[left]];
        left++;
      }
      left++;
    } else {
      // Update maxLen only if the current substring is longer
      maxLen = Math.max(maxLen, right - left + 1);
    }
    seen[char] = true;
    right++;
  }
  return maxLen;
};

// TESTS:
console.log(longestSubstring("abcabcbb")); // -> 3
console.log(longestSubstring("bbbbb")); // -> 1
console.log(longestSubstring("pwwkew")); // -> 3
