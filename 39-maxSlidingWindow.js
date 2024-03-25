/* 
You are given an array of integers nums,
there is a sliding window of size k which is moving from the very left
of the array to the very right. You can only see the k numbers in the window. 
Each time the sliding window moves right by one position.
Return the max sliding window.

Example 1:
Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]
Explanation: 
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7

Example 2:
Input: nums = [1], k = 1
Output: [1]
*/

// input: array (integers nums), number (sliding window k) 
// output: array (the max sliding window)
const maxSlidingWindow = (nums, k) => {
  // initialize a constant result to an empty array
  const result = [];
  // initialize a constant deque to an empty array 
  const deque = [];
  // iterate over the nums array
  for (let i = 0; i < nums.length; i++) {
    // remove elements from deque that are outside the window 
    // while the deque length is greater than 0 and deque at 0 is less than i minus k + 1
    while (deque.length > 0 && deque[0] < i - k + 1) {
      // shift the elements
      deque.shift();
    }
    // remove elements from deque that are smaller than current element 
    // while deque length is greater than 0 and nums at i >= nums[deque[deque length - 1]]
    while (deque.length > 0 && nums[i] >= nums[deque[deque.length - 1]]) {
      // pop the elements 
      deque.pop();
    }
    // add current index to the queue (push i to deque)
    deque.push(i);
    // if window reaches max size, add maximum element to result
    // if i greater than or equal to k minus 1 
    if (i >= k - 1) {
      // push nums at deque at 0 to the result array
      result.push(nums[deque[0]]);
    }
  }
  // return the result array 
  return result;
};

/* // TESTS:
console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3)); // -> [3,3,5,5,6,7]
console.log(maxSlidingWindow([1],  1)); // -> [1]
 */