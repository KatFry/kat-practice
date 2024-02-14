/* 
Suppose an array of length n sorted in ascending order is rotated between 1 and n times. 
For example, the array nums = [0,1,2,4,5,6,7] might become:
[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in 
the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums of unique elements, return the minimum element of this array.
You must write an algorithm that runs in O(log n) time.

Example 1:
Input: nums = [3,4,5,1,2]
Output: 1
Explanation: The original array was [1,2,3,4,5] rotated 3 times.

Example 2:
Input: nums = [4,5,6,7,0,1,2]
Output: 0
Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.

Example 3:
Input: nums = [11,13,15,17]
Output: 112
Explanation: The original array was [11,13,15,17] and it was rotated 4 times. 
*/


/* STRATEGY: divide into 2 sub-arrays and then determine which portion to search */


// input: nums (array of integers)
// output: minimum number in the array 
const findMin = nums => {
  // initialize left pointer to indicate the start of the array
  let left = 0;
  // initialize right pointer to indicate the end of the array 
  let right = nums.length - 1;
  // while left is less than right
  while (left < right) {
    // declare a const mid assigned to Math.floor of left plus right divided by 2 
    const mid = Math.floor((left + right) / 2);
    // if nums[mid] is greater than nums[right], reassign left to mid plus 1 (min el is in right half of array)
    if (nums[mid] > nums[right]) left = mid + 1;
    // else if nums[mid] is less than or equal to nums[right], reassign right to mid (min is in left half) 
    else right = mid;
  }
  // return nums[left] - only position where nums[mid] is less than or equal to nums[right]
  return nums[left];
}

/* // TESTS:
console.log(findMin([3,4,5,1,2])); // -> 1
console.log(findMin([4,5,6,7,0,1,2])); // -> 0
console.log(findMin([11,13,15,17])); // -> 11
 */

