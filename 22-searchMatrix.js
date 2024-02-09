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

const searchMatrix = (matrix, target) => {
  // assign a const m to the length of the entire matrix (signifying rows of the matrix)

  // assign a const n to the length of the matrix at 0 (signifying the number of columns in the matrix) 

  // initialize variable left to the matrix at 0 at 0

  // initialize a variable right to the matrix at m minus 1 at n minus 1 (last row and last column)

  // iterate while left is less than or equal to right 

    // assign a const mid to the left plus Math.floor of right minus left divided by 2 

    // assign a const midRow to Math.floor of mid divided by n 

    // assign a const midCol to mid remainder n 

    // check: if the matrix at midRow at midCol equals the target, return true

    // else if the matrix at midRow at midCol is less than the target, reassign left to mid plus 1

    // else reassign right to mid minus 1

  // return false outside the loop if the target was never found 

}

/* // TESTS:
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3)); // -> true
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13)); // -> false
*/