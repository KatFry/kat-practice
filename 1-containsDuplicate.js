/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
*/

// input: integer array (array of numbers)
// output: boolean - return true if any value appears twice, false if every element distinct

const containsDuplicate = nums => {
  // check if every array element is an integer 
  const integerCheck = nums.every(num => Number.isInteger(num));
  // if the array does not contain only integers 
  if (!integerCheck) {
    // log 'every value in array must be an integer'
    console.log('every value in array must be integer');
    // return false 
    return false; 
  }

  // create a Set, passing in the array, to store unique values 
  const numSet = new Set(nums); 
  // then return the evaluation of checking if the Set size is not strictly equal to arr length
  return numSet.size !== nums.length;
}

// OPTION 2: without using a Set (you could include integer check here too)
// const containsDuplicate = nums => {
//   // create an empty object
//   const seen = {};
//   // iterate over the nums array 
//   for (const num of nums) {
//     // if the num already exists in the seen object, it's a duplicate, so return true 
//     if (seen[num]) return true;
//     // otherwise assign key of num to value of true in object
//     seen[num] = true;
//   }
//   // if no duplicates were found, return false
//   return false;
// }

// TESTS:
console.log(containsDuplicate([1, 1, 2, 3, 4])); // this returns true because Set contains duplicates
console.log(containsDuplicate([5, 6, 7, 8]));
console.log(containsDuplicate([5, 'frog', 6, 7, 8]));


