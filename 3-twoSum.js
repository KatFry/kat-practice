/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.


Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
*/

// input: array of integers, target number
// output: indices of two numbers such that they add up to target (in array form)

const twoSum = (nums, target) => {
  // first make sure array of nums is completely made up of integers 
  const allIntegers = nums.every(num => Number.isInteger(num)); 
  // if not all are integers, return empty array 
  if (!allIntegers || typeof target !== "number") {
    return 'all array elements and target must be integers';
  }
  // declare a const indices initialized to an empty object (like a hash table) 
  const indices = {};
  // iterate over the input array nums
  for (let i = 0; i < nums.length; i++) {
    // calculate complement (number needed to reach target, so target - nums[i])
    const complement = target - nums[i]; 
    // check if the complement exists in the hash table 
    if (indices[complement] !== undefined) {
      // return indices of two numbers that add up to target in array form 
      return [indices[complement], i]; 
    }
    // if complement not found, add current number and its i to hash table 
    indices[nums[i]] = i;
  }
  // if no solution found, return empty array 
  return [];
}


// TESTS:
console.log(twoSum([1, 2, 3, 4], 4)); // should return [0, 2]
console.log(twoSum([2, 7, 11, 15], 9)); // should return [0, 1]
console.log(twoSum([5, 6, 7, 8], 20)); // should return [] 
console.log(twoSum([5, 6, 7, 8], 14)); // should return [1, 3]
console.log(twoSum([6, 'yummy', 7,  8], 10)); // should return 'all array elements and target must be integers'
console.log(twoSum([1, 2, 3, 4], 'cat'));// should return 'all array elements and target must be integers' 