/* Given an integer array nums, 
return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, 
and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.


Example 1:
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.

Example 2:
Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.

Example 3:
Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
*/

// input: array 
// output: array of arrays of triplets that sum up to 0 
const threeSum = nums => {
  // sort the input array in ascending order and assign it to a const sortNums
  const sortNums = nums.sort((a, b) => a - b); 
  // initialize an empty result array to store triplets
  const result = [];
  // loop through each array element (nums.length - 2 because we need two elements remaining in array)
  for (let i = 0; i < nums.length - 2; i++) {
    // fix current element as potential first element of triplet (nums[i])
    // if i equals 0 OR i is greater than 0 and nums at i doesn't equal nums at i minus 1 
    if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
      // initialize left pointer to i + 1 
      let left = i + 1;
      // initialize right pointer to nums.length minus 1 
      let right = nums.length - 1;
      // loop while left is less than right 
      while (left < right) {
        // assign const sum to nums at i plus nums at left plus nums at right 
        const sum = nums[i] + nums[left] + nums[right];
        // if sum of triplet is zero
        if (sum === 0) {
          // add it to result array 
          result.push([nums[i], nums[left], nums[right]]);
          // skip identical elements 
          // while left is less than right AND nums at left equals nums at left + 1, increment left
          while (left < right && nums[left] === nums[left + 1]) left++;
          // while left is less than right AND nums at right equals nums at right - 1, decrement right 
          while (left < right && nums[right] === nums[right - 1]) right--;
          // increment left
          left++;
          // decrement right 
          right--;
        }
        // if sum is less than zero, move left pointer to right (to increase sum)
        else if (sum < 0) left++;
        // if sum is greater than zero, move right pointer to left (to decrease sum) 
        else right--;
      }
    }
  }
  // return the result array 
  return result;
}

/* // TESTS:
console.log(threeSum([-1,0,1,2,-1,-4])); // -> [[-1,-1,2],[-1,0,1]]
console.log(threeSum([0,1,1])); // -> []
console.log(threeSum([0,0,0])); // -> [[0,0,0]]
 */