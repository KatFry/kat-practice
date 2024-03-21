/* 
You are given a string s and an integer k. You can choose any character of the string and 
change it to any other uppercase English character. You can perform this operation at most k times.
Return the length of the longest substring containing the same letter you can get after 
performing the above operations.

Example 1:
Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.

Example 2:
Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
There may exists other ways to achieve this answer too.
*/

/* TIME AND SPACE COMPLEXITY:
time: O(n) - n is the length of the input string 's'
space: O(1) - size of freqMap is fixed and independent of input size 
*/

// input: string, number
// output:  number 
const charReplacement = (s, k) => {
  // initialize variables to keep track of max string length, char frequency, and pointers 
  let maxLen = 0;
  let maxCount = 0;
  let start = 0;
  // declare a const freqMap assigned to an array with 26 elements all initialized to 0 
  const freqMap = new Array(26).fill(0);
  // loop, initializing end to 0, incrementing as long as the end is less than the string length
  for (let end = 0; end < s.length; end++) {
    // declare a const charCode assigned to diff between value of char at end and value of char 'A'
    const charCode = s.charCodeAt(end) - 'A'.charCodeAt(0);
    // increment the frequency count of a character in the freqMap array 
    freqMap[charCode]++;

    // reassign maxCount to Math.max of the current maxCount and the new character frequency 
    maxCount = Math.max(maxCount, freqMap[charCode]);
    // checking whether length of curr substring (from start to end, inclusive) 
    // minus count of most freq char in that substring (maxCount) > max number of allowed changes (k)
    if (end - start + 1 - maxCount > k) {
      // if so, update the start position to move window forward 
      const startCharCode = s.charCodeAt(start) - 'A'.charCodeAt(0);
      freqMap[startCharCode]--;
      start++;
    }
    // reassign maxLen to Math.max of current maxLen and end minus start plus 1 (current substring length)
    maxLen = Math.max(maxLen, end - start + 1);
  }
  // return the maxLen after the loop 
  return maxLen;
};

/* // TESTS:
console.log(charReplacement("ABAB", 2)); // -> 4
console.log(charReplacement("AABABBA", 1)); // -> 4 */
