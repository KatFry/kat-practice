/*
Given an integer array nums, return an array answer such that answer[i] is equal 
to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.


Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
 

Constraints:

2 <= nums.length <= 105
-30 <= nums[i] <= 30
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 

Follow up: Can you solve the problem in O(1) extra space complexity? 
(The output array does not count as extra space for space complexity analysis.)
*/


// input: integer array nums
// output: array such that answer[i] equals product of all els except nums[i] 

// OPTION 1: 
// time and space complexity of this solution is O(n) because of the three arrays 
  // time: each iteration involves single pass through the array 
  // space: each array has size proportional to input array nums (so linear with respect to input)
const productExceptSelf = nums => {
  // declare a constant n assigned to nums.length (to be easier to keep track of)
  const n = nums.length;
  // initialize prefix and suffix arrays (every element will start off as 1)
  const preProducts = Array(n).fill(1);
  // console.log('preProducts: ', preProducts);
  const sufProducts = Array(n).fill(1);
  // console.log('sufProducts: ', sufProducts);

  // calculate prefix products 
  let preProd = 1;
  // incrementing loop to count prefix products 
  for (let i = 0; i < n; i++) {
    // assign preProducts at i to preProd
    preProducts[i] = preProd;
    // multiply preProd by nums at i
    preProd *= nums[i];
    // console.log(preProd);
  }

  // calculate suffix products
  let sufProd = 1;
  // decrementing loop to calculate suffix products 
  for (let i = n - 1; i >= 0; i--) {
    // assign sufProducts at i to sufProd
    sufProducts[i] = sufProd;
    // multiply sufProduct by nums at i
    sufProd *= nums[i]; 
    // console.log(sufProd);
  }

  // calculate result array 
  const result = [];
  for (let i = 0; i < n; i ++) {
    // assign result at i to preProducts[i] * sufProducts[i]; and fix the -0 problem 
    result[i] = preProducts[i] * sufProducts[i] === 0 ? 0 : preProducts[i] * sufProducts[i];
  }

  // return the result
  return result;
}

// TESTS:
console.log(productExceptSelf([1, 2, 3, 4])); // should return [24, 12, 8, 6]
console.log(productExceptSelf([-1,1,0,-3,3])); // should return [0, 0, 9, 0, 0], figure out why this gives -0


// OPTION 2: with O(1) space complexity


