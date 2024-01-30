/* 
You are given an integer array height of length n. 
There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container,
such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.


Example 1:
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. 
In this case, the max area of water (blue section) the container can contain is 49.

Example 2:
Input: height = [1,1]
Output: 1
*/

/* time and space complexity:
- time: O(n), each pointer move processes 1 element in the array, and never revisit same element 
- space: O(1), uses constant amount of space 
*/

// input: height (array of integers)
// output: number (maximum amount of water container can store) 
const maxArea = height => {
  // initialize maxArea variable to 0
  let maxArea = 0;
  // initialize left pointer to index 0
  let left = 0;
  // initialize right pointer to index height.length minus 1
  let right = height.length - 1;
  // calculate area between lines at current left and right positions:
  // formula: min(height[left], height[right]) * right - left 
  // loop while left is less than right
  while (left < right) {
    // assign const h to Math.min between height at left and height at right
    const h = Math.min(height[left], height[right]);
    // assign const w to right minus left 
    const w = right - left;
    // assign const area to h times w 
    const area = h * w; 
    // reassign maxArea to Math.max between maxArea and area 
    maxArea = Math.max(maxArea, area);
    // if height[left] is less than height[right], increment left (to move pointers inward)
    if (height[left] < height[right]) left++;
    // else decrement right 
    else right--;
  }
  // return maxArea 
  return maxArea;
}

/* // TESTS:
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // -> 49
console.log(maxArea([1,1])); // -> 1 */