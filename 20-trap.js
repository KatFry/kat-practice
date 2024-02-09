/* 
Given n non-negative integers representing an elevation map where the width of each bar is 1,
compute how much water it can trap after raining.

Example 1:
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. 
In this case, 6 units of rain water (blue section) are being trapped.

Example 2:
Input: height = [4,2,0,3,2,5]
Output: 9

*/

// input: array of integers (representing an elevation map)
// output: number (how much water it can trap after raining) 
const trap = height => {
  // initialize two pointers, left and right, pointing to start and end of elevation map 
  let left = 0; 
  let right = height.length - 1;
  // initialize maxLeft and maxRight variables to 0
  let maxLeft = 0;
  let maxRight = 0;
  // initialize totalWater variable to 0
  let totalWater = 0;
  // while the left pointer is less than or equal to the right pointer 
  while (left <= right) {
    // check: if the height at the left is less than or equal to the height at the right  
    if (height[left] <= height[right]) {
      // assign maxLeft to Math.max of maxLeft and the height at the left
      maxLeft = Math.max(maxLeft, height[left]);
      // reassign totalWater to adding Math.max of 0 and maxLeft minus height at the left 
      totalWater += Math.max(0, maxLeft - height[left]);
      // increment the left pointer 
      left++;
    }
    // else 
    else {
      // reassign maxRight to Math.max of maxRight and height at right 
      maxRight = Math.max(maxRight, height[right]);
      // reassign totalWater to adding Math.max of 0 and maxRight minus height at the right 
      totalWater += Math.max(0, maxRight - height[right]);
      // decrement the right pointer 
      right--;
    }
  }
  // return totalWater 
  return totalWater;
}

/* // TESTS:
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); // -> 6
console.log(trap([4,2,0,3,2,5])); // -> 9
*/