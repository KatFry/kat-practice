/* 
Given two strings s and t of lengths m and n respectively, return the minimum window 
substring
of s such that every character in t (including duplicates) is included in the window.
If there is no such substring, return the empty string "".
The testcases will be generated such that the answer is unique.

Example 1:
Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

Example 2:
Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.

Example 3:
Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.
*/

// input: 2 strings
// output: 1 string (minimum window substring such that every char in t is included)
const minWindow = (s, t) => {
  // initialize a const targetMap to an empty obj to store char frequency in t

  // iterate over t, assigning each char as a key with values corresponding

  // initialize a left pointer to 0

  // intiialize a variable minLen to Infinity (very large value)

  // initialize a variable minStart to 0 (start index of min window substring)

  // initialize a variable count to length of t (need to be found in s)

  // iterate through the string s using the righ pointer initialized to 0

    // assign char to s[right] for readability 

    // if char in targetMap is not undefined...

      // and if targetMap is greater than 0, decrement count

      // decrement targetMap at that char's value 

    // while count equals 0 (if all chars in t are found, try to shrink window)

      // if right minus left plus 1 is less than minLen

        // reassign minLen to right minus left plus 1 

        // reassign minStart to left 

      // declare a const leftChar assigned to s at index of left 

      // if targetMap at leftChar is not undefined

        // and if it is greater than or equal to 0, increment count

        // increment targetMap at leftChar 

      // increment left 

  // return ternary operator checking if minLen equals Infinity 
  // if so, return empty string, or if not return s.substr of minStart and minLen
  
};


/* // TESTS:
console.log(minWindow("ADOBECODEBANC", "ABC")); // -> "BANC"
console.log(minWindow("a", "a")); // -> "a"
console.log(minWindow("a", "aa")); // -> ""
*/