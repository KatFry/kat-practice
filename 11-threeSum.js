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

  // initialize an empty result array to store triplets

  // loop through each array element

    // fix current element as potential first element of triplet (nums[i])

    // initialize left pointer

    // initialize right pointer

    // if sum of triplet is zero, add it to result array 

    // if sum is less than zero, move left pointer to right (to increase sum)

    // if sum is greater than zero, move right pointer to left (to decrease sum) 

    // skip identical elements 

  // return the result array 
  
}

/* // TESTS:
console.log(threeSum([-1,0,1,2,-1,-4])); // -> [[-1,-1,2],[-1,0,1]]
console.log(threeSum([0,1,1])); // -> []
console.log(threeSum([0,0,0])); // -> [[0,0,0]]
*/