/* 
You are given an m x n integer matrix matrix with the following two properties:

Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.

Example 1:
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true

Example 2:
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false
*/

/* time and space complexity:
- time: O(log (m*n)) -  m is the number of rows, n is average number of columns in each row 
- space: O(1) - constant amount of extra space regardless of input 
*/

const searchMatrix = (matrix, target) => {
  // initial check: if the matrix is empty or has no rows or columns, return false because target can't be found
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) return false;
  // assign a const m to the length of the entire matrix (signifying rows of the matrix)
  const m = matrix.length;
  // initialize variable left to the matrix at 0 at 0
  let left = matrix[0][0];
  // initialize a variable right to the matrix at m minus 1 at n minus 1 (last el - last row and last column)
  let right = matrix[m - 1][matrix[m - 1].length - 1];
  
  // iterate while left is less than or equal to right 
  while (left <= right) {
    // assign a const mid to the left plus Math.floor of right minus left divided by 2 (avg of L and R)
    const mid = left + Math.floor((right - left) / 2);
      
    // find the row and column indices for the mid value
    let midRow = 0;
    let midCol = 0;
    for (let i = 0; i < m; i++) {
      if (mid >= matrix[i][0] && mid <= matrix[i][matrix[i].length - 1]) {
        midRow = i;
        midCol = matrix[i].indexOf(mid);
        break;
      }
    }
      
    // check: if the matrix at midRow at midCol equals the target, return true
    if (matrix[midRow][midCol] === target) return true;
      
    // else if it is less than the target, reassign left to mid plus 1 (target may be in the right half)
    else if (matrix[midRow][midCol] < target) left = mid + 1;
      
    // else reassign right to mid minus 1 (target may be in the left half) 
    else right = mid - 1;
  }
    
  // return false outside the loop if the target was never found 
  return false;
}


/* // TESTS:
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3)); // -> true
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13)); // -> false
 */


/* for some reason the below solution doesn't work with the test cases and I'm not sure why...

const searchMatrix = (matrix, target) => {
  // initial check: if the matrix is empty or has no rows or columns, return false because target can't be found
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) return false;
  // assign a const m to the length of the entire matrix (signifying rows of the matrix)
  const m = matrix.length;
  // assign a const n to the length of the matrix at 0 (signifying columns in the matrix) 
  const n = matrix[0].length;
  // initialize variable left to the matrix at 0 at 0
  let left = matrix[0][0];
  // initialize a variable right to the matrix at m minus 1 at n minus 1 (last el - last row and last column)
  let right = matrix[m - 1][n - 1];
  // iterate while left is less than or equal to right 
  while (left <= right) {
    // assign a const mid to the left plus Math.floor of right minus left divided by 2 (avg of L and R)
    const mid = left + Math.floor((right - left) / 2);
    // assign a const midRow to Math.floor of mid divided by n 
    const midRow = Math.floor(mid / n);
    // assign a const midCol to mid remainder n 
    const midCol = mid % n;
    // check: if the matrix at midRow at midCol equals the target, return true
    if (matrix[midRow][midCol] === target) return true;
    // else if it is less than the target, reassign left to mid plus 1 (target may be in right half)
    else if (matrix[midRow][midCol] < target) left = mid + 1;
    // else reassign right to mid minus 1 (target may be in left half) 
    else right = mid - 1;
  }
  // return false outside the loop if the target was never found 
  return false;
}
 */