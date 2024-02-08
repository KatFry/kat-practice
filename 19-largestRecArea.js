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

// input: array of heights - integers 
// output: number (area of largest rectangle in histogram)
const largestRecArea = heights => {
  // initialize a stack to store the indices 

  // initialize a variable maxArea to 0 

  // iterate through the passed-in array of heights

    // while the stack is not empty AND the current bar's height is less than bar at index at stack's top
    // access this by heights[stack[stack.length - 1]]

      // assign a const height to the last item popped from the stack 

      // assign a const width to ternary operator: check if stack length is 0
      // if so, assign it to i, else assign it to i minus the el at top of stack minus 1 

      // reassign maxArea to Math.max of maxArea and the new area (height times width) 

  // return the maxArea 
  
}
/* // TESTS:
console.log(largestRecArea([2,1,5,6,2,3])); // -> 10
console.log(largestRecArea([2,4])); // -> 4
*/
