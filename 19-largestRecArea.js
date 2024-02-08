/* 
Given an array of integers heights representing the histogram's bar height where the width of each bar is 1,
return the area of the largest rectangle in the histogram.

Example 1:
Input: heights = [2,1,5,6,2,3]
Output: 10
Explanation: The above is a histogram where width of each bar is 1.
The largest rectangle is shown in the red area, which has an area = 10 units.

Example 2:
Input: heights = [2,4]
Output: 4
*/

/* Overall idea:
Traverse the histogram bars, maintaining a stack of indices that represent the heights of the bars in increasing
order. 
*/

/* time and space complexity:
- time: linear
  - iteration through each bar: O(n) - n is the number of bars in the histogram
  - each bar pushed and popped from the stack at most once, so overall is still O(n)
- space: linear 
  - O(n) - where n is the number of bars in the histogram 
  - constant extra variables don't contribute significantly to space 
*/

// input: array of heights - integers 
// output: number (area of largest rectangle in histogram)
const largestRecArea = heights => {
  // initialize a stack to store the indices 
  const stack = [];
  // initialize a variable maxArea to 0 
  let maxArea = 0;
  // iterate through the passed-in array of heights
  for (let i = 0; i < heights.length; i++) {
    // while the stack is not empty AND the current bar's height is less than bar at index at stack's top
    // access this by heights[stack[stack.length - 1]] 
    while (stack.length > 0 && heights[i] < heights[stack[stack.length - 1]]) {
      // assign a const height to the last item popped from the stack 
      const height = heights[stack.pop()];
      // assign a const width to ternary operator: check if stack length is 0
      // if so, assign it to i, else assign it to i minus the el at top of stack minus 1 
      // because its the bar to its immediate left 
      const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1; 
      // reassign maxArea to Math.max of maxArea and the new area (height times width) 
      maxArea = Math.max(maxArea, height * width); 
    }
    // push i to the stack 
    stack.push(i); 
  }

  // while the stack length is greater than 0
  while (stack.length > 0) {
    // declare a const height assigned to the same as above
    const height = heights[stack.pop()];
    // declare a const width assigned to a ternary operator: if stack length is 0, heights.length
    // if false, then heights.length minus the last element in the stack minus 1 
    const width = stack.length === 0 ? heights.length : heights.length - stack[stack.length - 1] - 1;
    // reassign maxArea to Math.max of maxArea and new area (height times width) 
    maxArea = Math.max(maxArea, height * width); 
  }
  // return the maxArea 
  return maxArea;
}

/* // TESTS:
console.log(largestRecArea([2,1,5,6,2,3])); // -> 10
console.log(largestRecArea([2,4])); // -> 4
 */

/* ChatGPT's pseudocode explanation of what is happening above:
For each bar at index i in the histogram:
  While the stack is not empty and the current bar's height is less than the height of the bar 
  at the top of the stack:
    - Pop the index from the stack (representing a potential height).
    - Calculate the width of the rectangle with the popped height as the rightmost height:
      - If the stack is empty, width = i (extends to the leftmost end of the histogram).
      - If the stack is not empty, width = i - stack[top] - 1 (distance to the bar to the immediate left).
    - Calculate the area using height and width and update maxArea if needed.
  Push the current index i onto the stack.

While the stack is not empty:
  - Pop the index from the stack (representing a potential height).
  - Calculate the width of the rectangle with the popped height as the rightmost height:
    - If the stack is empty, width = i (extends to the leftmost end of the histogram).
    - If the stack is not empty, width = i - stack[top] - 1 (distance to the bar to the immediate left).
  - Calculate the area using height and width and update maxArea if needed.

Return maxArea.
*/

