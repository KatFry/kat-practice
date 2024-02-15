/* 
There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, 
nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that 
the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). 
For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, 
return the index of target if it is in nums, or -1 if it is not in nums.
You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4

Example 2:
Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1

Example 3:
Input: nums = [1], target = 0
Output: -1
*/

// input: nums (array of integers), target (number)
// output: number (index of target)
const searchArray = (nums, target) => {
  // initialize a left pointer to the start of the array 
  let left = 0;
  // initialize a right pointer to the end of the array 
  let right = nums.length - 1;
  // while left is less than or equal to right (pointers meet or cross) 
  while (left <= right) {
    // find the middle - Math.floor of left plus right divided by 2 
    const mid = Math.floor((left + right) / 2);
    // if the nums at the middle equals the target, return the index of the middle (mid)
    if (nums[mid] === target) return mid;
    // else if nums[mid] is greater than nums[right], reassign left to mid plus 1 (target is in right half)
    else if (nums[mid] > nums[right]) left = mid + 1;
    // else assign right to mid 
    else right = mid;
  }
  // return -1 outside the loop if target is not found 
  return -1;
}


/* // TESTS:
console.log(searchArray([4,5,6,7,0,1,2], 0)); // -> 4
console.log(searchArray([4,5,6,7,0,1,2], 3)); // -> -1
console.log(searchArray([1], 0)); // -> -1
 */