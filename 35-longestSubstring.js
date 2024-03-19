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
  // declare a pointer left intialized to 0 
  let left = 0;
  // declare a pointer right initialized to 0 
  let right = 0; 
  // initialize a variable maxLen to 0 to keep track of max length of substring 
  let maxLen = 0;
  // assign a const seen to an empty object 
  const seen = {};
  // iterate through the string using the right pointer (while right is less than s length)
  while (right < s.length) {
    // assign a const char to string at right index for readability 
    const char = s[right];
    // while the char is already in the set, move the left pointer...
    while (seen[char]) {
      // delete seen at s at left 
      delete seen[s[left]];
      // increment left  
      left++;
    }
    // reassign maxLen to Math.max of maxLen and right minus left plus 1 
    // "right - left + 1": right - left accounts for num of chars btwn left and right, inclusive 
    // plus 1 counts for the length of the substring 
    maxLen = Math.max(maxLen, right - left + 1);
    // reassign seen at that char to true
    seen[char] = true;
    // increment right 
    right++;
  }
  // return maxLen 
  return maxLen;
};

/* // TESTS:
console.log(longestSubstring("abcabcbb")); // -> 3
console.log(longestSubstring("bbbbb")); // -> 1
console.log(longestSubstring("pwwkew")); // -> 3
 */