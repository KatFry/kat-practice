/* A phrase is a palindrome if,
after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters,
it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome. */

/* help from: https://www.youtube.com/watch?v=UaS7aeUnLP0 */


// input: string (can have commas, special characters, capitals)
// output: boolean - true if palindrome, false if not 
const isPalindrome = str => {
  // create regex to replace special characters with '' 

  // create leftIndex variable to keep track of left pointer 

  // create rightIndex variable to keep track of right pointer 

  // create while loop until the pointers equal one another 

    // create condition to see if values of pointers don't equal to each other, return false

    // increment leftIndex

    // decrement rightIndex 

  // return true because all values in the string are equal to each other 

}

/* // TESTS:
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true 
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome(" ")); // true 
*/