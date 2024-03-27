/* 
Given the root of a binary tree, return its maximum depth.
A binary tree's maximum depth is the number of nodes along the longest path 
from the root node down to the farthest leaf node.

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: 3

Example 2:
Input: root = [1,null,2]
Output: 2
*/

class TreeNode {
  constructor(val = 0, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
  }
}

const maxDepth = root => {
  // if the root is undefined, return 0

  // declare const leftDepth assigned to eval result of invoking maxDepth, passing in root.left

  // declare const rightDepth assigned to eval result of invoking maxDepth, passing in root.right

  // return the result of Math.max, passing in leftDepth and rightDepth plus 1 

};


/* // TESTS:


*/