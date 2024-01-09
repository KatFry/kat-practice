/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
typically using all the original letters exactly once.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
*/

// input: two strings (s and t)
// output: boolean - true if t is anagram of s, false otherwise

// const validAnagram = (s, t) => {
//   // if s or t are not strings
//   if (typeof s !== "string" || typeof t !== "string") {
//     // log 'both input values must be strings'
//     console.log('both input values must be strings');
//     // return false
//     return false;
//   }
//   // if lengths of s and t are different, then they cannot be anagrams
//   if (s.length !== t.length) return false; 
//   // create Sets for each string to store characters 
//   const sSet = new Set(s); 
//   const tSet = new Set(t);
//   // then check if characters in t match those in stringSet made from s characters 
//   return setsAreEqual(sSet, tSet);
// }

// // create helper function to check if sets are equal
// const setsAreEqual = (set1, set2) => {
//   // if size is not the same, return false
//   if (set1.size !== set2.size) return false;
//   // iterate over set1, checking if set2 does not have element
//   for (const element of set1) {
//     if (!set2.has(element)) return false;
//   }
//   // otherwise return true
//   return true;
// }

// OPTION 2: without using sets 
const validAnagram = (s, t) => {
  // if s or t are not strings
  if (typeof s !== "string" || typeof t !== "string") {
    // log 'both input values must be strings'
    console.log('both input values must be strings');
    // return false
    return false;
  }
  // if the string lengths are not the same, immediately return false
  if (s.length !== t.length) return false;
  // create an object to store character count of s
  const charCount = {};

  // increment count for each character of s 
  for (const char of s) {
    // assign key of the char to either its count (if it exists) or 0, plus 1 
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // decrement count for each character in t
  for (const char of t) {
    // if it doesn't exist or its count becomes negative, return false 
    // this would mean t has char not present in s or has higher frequency than s 
    if (!charCount[char]) return false;
    // decrement the value of charCount (if they all end at 0, frequency is same as s)
    charCount[char]--;
  }
  
  // if all chars have matching counts,  return true
  return true;
}


// TESTS:
console.log(validAnagram('rat', 'tar'));
console.log(validAnagram('rat',  'car'));
console.log(validAnagram('art', 'star'))
console.log(validAnagram(10, 'chicken'));