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
  
  // initialize count1 with the character counts of s1


  // use a sliding window approach to check the permutations in s2

    // increment the count for character in current window of s2 

    // if the window exceeds s1's length, remove the first character of the window 

    // check if the char counts in current window match counts in s1, and return true if so 


  // return false if no permutation is found after full traversal 
  
};

/* // TESTS:
console.log(checkInclusion("ab", "eidbaooo")); // -> true
console.log(checkInclusion("ab", "eidboaoo")); // -> false 
*/