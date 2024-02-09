/* 
Given an array of integers nums which is sorted in ascending order, and an integer target, 
write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
You must write an algorithm with O(log n) runtime complexity.


Example 1:
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

Example 2:
Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
*/

/* OPTION 1: normal O(n) linear approach 
  O(1) constant space complexity here 
*/

// input: array of integers, target number
// output: index of target, otherwise -1 
const search = (nums, target) => {
  // iterate through the nums array 
  for (let i = 0; i < nums.length; i++) {
    // if nums at i equals the target anywhere, return that index
    if (nums[i] === target) return i;
  }
  // return -1 otherwise
  return -1; 
}

/* // TESTS:
console.log(search([-1,0,3,5,9,12], 9)); // -> 4
console.log(search([-1,0,3,5,9,12], 2)); // -> -1
*/

/* OPTION 2: binary search approach (O log n - logarithmic)
  this approach is actually more efficient than the linear approach because the array is sorted! 
  O(1) constant space complexity here as well 
*/

const binSearch = (nums, target) => {
  // initialize a variable left to 0 to indicate the start
  let left = 0; 
  // initialize a variable right to nums.length minus 1 to indicate the end 
  let right = nums.length - 1;
  // iterate while left is less than or equal to right
  while (left <= right) {
    // declare a constant mid assigned to Math.floor of left plus right divided by 2
    const mid = Math.floor((left + right) / 2);
    // check: if nums at mid is the target, return mid
    if (nums[mid] === target) return mid;
    // else if nums at mid is less than the target, reassign left to mid plus 1 (target may be in right half)
    else if (nums[mid] < target) left = mid + 1;
    // else reassign right to mid minus 1 (target may be in left half) 
    else right = mid - 1;
  }
  // return -1 if the target was not found 
  return -1;
}

/* // TESTS:
console.log(binSearch([-1,0,3,5,9,12], 9)); // -> 4
console.log(binSearch([-1,0,3,5,9,12], 2)); // -> -1
 */