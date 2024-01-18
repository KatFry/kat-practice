/*Given an integer array nums and an integer k, return the k most frequent elements. 
You may return the answer in any order.

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
 

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.
*/

// input: nums (array of integers), k (integer)
// output: array of numbers - most frequent elements in any element 

// OPTION 1: Using a simple object for storage
const kFrequentElements = (nums, k) => {
  // declare a const called freqs assigned to an empty object
  const freqs = {};
  // loop over the nums array, storing how many times each num appears
  for (const num of nums) {

  }
}


// const kFrequentElements = (nums, k) => {
//   // declare a const assigned to a new instance of a Map 
//   const frequencyMap = new Map(); 
//   // loop over the passed-in nums array 
//   for (const num of nums) {
//     // declare a count variable to keep track of how frequent each num is in the array 
//     // assign it to either using the get method to find corresponding num, or set to 0 if it doesn't exist yet 
//     let count = frequencyMap.get(num) || 0; 
//   }
//     // 

//   // return the arrayFrequency 
// }